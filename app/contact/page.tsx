import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact | Prathamesh Bhil",

  description:
    "Get in touch with Prathamesh Bhil, Founder & CEO of Cosmolix Pvt Ltd.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <div className="container-custom">
          <div className="mb-16">
            <h1 className="mb-6 text-5xl font-bold">
              Let's Connect
            </h1>

            <p className="max-w-2xl text-slate-400">
              Interested in working
              together, discussing
              technology, or exploring
              opportunities with
              Cosmolix?
            </p>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}