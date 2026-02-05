// lib/validations/contactSchema.ts
import { z } from "zod"
import { Language } from "@/types"

export const getContactSchema = (lang: Language) => {
  const messages = {
    es: {
      nameMin: "El nombre es demasiado corto",
      nameMax: "El nombre es demasiado largo",
      email: "Correo electrónico inválido",
      messageMin: "El mensaje es muy corto",
      messageMax: "El mensaje es demasiado largo",
    },
    en: {
      nameMin: "Name is too short",
      nameMax: "Name is too long",
      email: "Invalid email address",
      messageMin: "Message is too short",
      messageMax: "Message is too long",
    },
  }

  return z.object({
    fullName: z
      .string()
      .min(2, messages[lang].nameMin)
      .max(50, messages[lang].nameMax),

    email: z
      .string()
      .email(messages[lang].email),

    message: z
      .string()
      .min(10, messages[lang].messageMin)
      .max(1000, messages[lang].messageMax),
  })
}

export type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>