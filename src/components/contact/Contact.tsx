import { SectionsProps } from "@/types";
import { contactContent } from "@/constants/contact/ContactContent";
import ContactForm from "@/components/contact/ContactForm";
import ContactSocialMedia from "@/components/contact/ContactSocialMedia";

const Contact = ({ language }: SectionsProps) => {
  const { title } = contactContent[language];

  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="inline-block text-4xl md:text-5xl font-bold mb-4 py-2 bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <ContactForm language={language} />
          <ContactSocialMedia />
        </div>
      </div>
    </section>
  );
};

export default Contact;
