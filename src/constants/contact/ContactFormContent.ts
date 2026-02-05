import { Language, ContactFormContent } from "@/types";

export const contactFormContent: Record<Language, ContactFormContent> = {
  es: {
    fullName: "Nombre Completo",
    email: "Correo Electronico",
    message: "Mensaje",
    buttonText: "Enviar",
  },
  en: {
    fullName: "Full Name",
    email: "Email",
    message: "Message",
    buttonText: "Send",
  },
};
