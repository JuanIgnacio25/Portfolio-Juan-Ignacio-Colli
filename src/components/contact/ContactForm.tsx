"use client";

import { contactFormContent } from "@/constants/contact/ContactFormContent";
import { SectionsProps } from "@/types";

import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { IoMdSend } from "react-icons/io";
import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getContactSchema,
  ContactFormData,
} from "@/lib/validations/contactSchema";

const ContactForm = ({ language }: SectionsProps) => {
  const { fullName, email, message, buttonText } = contactFormContent[language];

  const form = useForm<ContactFormData>({
    resolver: zodResolver(getContactSchema(language)),
    mode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success(
        language === "es"
          ? "Mensaje enviado correctamente 🚀"
          : "Message sent successfully 🚀",
        {
          description:
            language === "es"
              ? "Gracias por contactarme, te respondo a la brevedad."
              : "Thanks for reaching out, I’ll get back to you soon.",
        }
      );

      form.reset();
    } catch {
      toast.error(
        language === "es" ? "Error al enviar" : "Failed to send message",
        {
          description:
            language === "es"
              ? "Intentá nuevamente en unos segundos."
              : "Please try again in a few seconds.",
        }
      );
    }
  };

  return (
    <Card className="bg-neutral-bg shadow-brand/10 shadow-2xl border-border/60">
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="name">{fullName}</Label>
          <Input
            id="name"
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{email}</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{message}</Label>
          <Textarea
            id="message"
            className="min-h-[140px]"
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="relative mx-auto flex items-center justify-center gap-2 bg-brand/60 dark:bg-brand/80 hover:bg-brand dark:hover:bg-brand text-neutral/90 dark:text-neutral-bg/90 hover:shadow-xs overflow-hidden"
        >
          {/* Contenido normal */}
          <span className={`flex items-center gap-2 transition-opacity ${isSubmitting && "opacity-0"}`}>
            {buttonText}
            <IoMdSend className="h-4 w-4" />
          </span>

          {/* Overlay loading */}
          {isSubmitting && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
              <Loader2 className="h-5 w-5 animate-spin text-current" />
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
