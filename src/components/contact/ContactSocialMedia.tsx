import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SectionsProps } from "@/types";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

import { FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactSocialMedia = ({ language }: SectionsProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText("juanignaciocolli28@gmail.com");

    setCopiedEmail(true);

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  useEffect(() => {
    setCopiedText(language == "es" ? "copiado" : "copied");
  });

  return (
    <Card
      className="
    bg-background/40 
    backdrop-blur-md 
    border-none
    shadow-none
  "
    >
      <CardHeader className="flex justify-center items-center">
        <FaLocationDot className="bg-brand text-white dark:text-secondary  text-2xl rounded-full p-1" />
        <p className="text-foreground dark:text-white">Argentina</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Imagen */}
        <div className="relative w-auto h-56 rounded-full overflow-hidden flex items-center justify-center bg-brand/10">
          <Image
            src="https://res.cloudinary.com/dzvwrmykh/image/upload/v1770381099/contactImage_kw4nlr.svg"
            alt="Contacto"
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Redes */}
        <div className="flex justify-center items-center gap-1 pt-2">
          <Link
            href={"https://www.linkedin.com/in/juan-ignacio-colli/"}
            target="_blank"
          >
            <Button variant="social" size={"icon"}>
              <FaLinkedin className="text-xl" />
            </Button>
          </Link>

          <Link href={"https://github.com/JuanIgnacio25"} target="_blank">
            <Button variant="social" size={"icon"}>
              <FaGithub />
            </Button>
          </Link>

          <Link href={"https://wa.me/5493471670274"} target="_blank">
            <Button variant="social" size={"icon"}>
              <IoLogoWhatsapp />
            </Button>
          </Link>

          <div className="relative flex items-center gap-2">
            <Button
              variant="social"
              size="icon"
              onClick={copyEmail}
              className="relative z-10"
            >
              <SiGmail />
            </Button>

            {/* Badge copiado */}
            <span
              className={`absolute left-full flex items-center gap-1 rounded-full bg-brand/90 px-2 py-0.5 text-xs text-white shadow-sm transition-all duration-300 ${
                copiedEmail
                  ? "opacity-100 translate-x-0"
                  : "pointer-events-none opacity-0 translate-x-[-6px]"
              }`}
            >
              <FaCheck className="h-3 w-3" />
              {copiedText}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSocialMedia;
