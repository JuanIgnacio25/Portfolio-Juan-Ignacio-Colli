import { contactFormContent } from "@/constants/contact/ContactFormContent";
import { SectionsProps } from "@/types";

import { Card, CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { IoMdSend } from "react-icons/io";

import Link from "next/link";

const ContactForm = ({ language }: SectionsProps) => {
  const { fullName, email, message, buttonText } = contactFormContent[language];

  return (
    <Card className="bg-neutral-bg shadow-brand/10 shadow-2xl border-border/60">
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">{fullName}</Label>
          <Input id="name" placeholder="Juan Pérez"/>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{email}</Label>
          <Input id="email" type="email" placeholder="juan@email.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{message}</Label>
          <Textarea
            id="message"
            placeholder="Contame sobre tu proyecto..."
            className="min-h-[140px]"
          />
        </div>

        <div className="flex w-full justify-center items-center">
          <Link href={""}>
              <Button className="flex items-center gap-2 bg-brand/60 dark:bg-brand/80  dark:hover:bg-brand hover:bg-brand text-neutral/90 dark:text-neutral-bg/90 hover:shadow-xs">
                <p>{buttonText}</p>
                <IoMdSend className="h-4 w-4" />
              </Button>
            </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
