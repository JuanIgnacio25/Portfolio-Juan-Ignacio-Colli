import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

const ContactSocialMedia = () => {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("juan@email.com");
  };

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
            src="/messages.svg"
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

          <Button variant="social" size={"icon"} onClick={copyEmail}>
            <IoIosMail />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSocialMedia;
