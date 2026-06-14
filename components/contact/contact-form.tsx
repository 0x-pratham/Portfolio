"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { contactSchema, ContactFormValues } from "@/lib/validations";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const nameValue = watch("name", "");
  const emailValue = watch("email", "");
  const messageValue = watch("message", "");

  async function onSubmit(data: ContactFormValues) {
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);
      reset();
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Name Field with Floating Label and Stagger Reveal */}
      <Reveal delay={0.05}>
        <div className="relative">
          <input
            {...register("name")}
            id="name"
            placeholder=" "
            className="
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-5
              pb-4
              pt-7
              text-[var(--warm-ivory)]
              placeholder:text-[var(--warm-grey)]
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:bg-white/[0.02]
              focus:border-[var(--accent)]
              focus:outline-none
              focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]
              peer
            "
          />
          <label
            htmlFor="name"
            className="
              absolute
              left-5
              top-4
              text-xs
              text-[var(--warm-grey)]
              transition-all
              duration-300
              peer-placeholder-shown:top-5
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-[var(--accent)]
              pointer-events-none
              ${nameValue ? 'top-2 text-xs' : ''}
            "
          >
            Your Name
          </label>

          {errors.name && (
            <p className="mt-2 flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={14} />
              {errors.name.message}
            </p>
          )}
        </div>
      </Reveal>

      {/* Email Field with Floating Label and Stagger Reveal */}
      <Reveal delay={0.10}>
        <div className="relative">
          <input
            {...register("email")}
            id="email"
            placeholder=" "
            className="
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-5
              pb-4
              pt-7
              text-[var(--warm-ivory)]
              placeholder:text-[var(--warm-grey)]
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:bg-white/[0.02]
              focus:border-[var(--accent)]
              focus:outline-none
              focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]
              peer
            "
          />
          <label
            htmlFor="email"
            className="
              absolute
              left-5
              top-4
              text-xs
              text-[var(--warm-grey)]
              transition-all
              duration-300
              peer-placeholder-shown:top-5
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-[var(--accent)]
              pointer-events-none
              ${emailValue ? 'top-2 text-xs' : ''}
            "
          >
            Your Email
          </label>

          {errors.email && (
            <p className="mt-2 flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={14} />
              {errors.email.message}
            </p>
          )}
        </div>
      </Reveal>

      {/* Message Field with Floating Label and Stagger Reveal */}
      <Reveal delay={0.15}>
        <div className="relative">
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            placeholder=" "
            className="
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-5
              pb-4
              pt-7
              text-[var(--warm-ivory)]
              placeholder:text-[var(--warm-grey)]
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:bg-white/[0.02]
              focus:border-[var(--accent)]
              focus:outline-none
              focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]
              resize-none
              peer
            "
          />
          <label
            htmlFor="message"
            className="
              absolute
              left-5
              top-4
              text-xs
              text-[var(--warm-grey)]
              transition-all
              duration-300
              peer-placeholder-shown:top-5
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-[var(--accent)]
              pointer-events-none
              ${messageValue ? 'top-2 text-xs' : ''}
            "
          >
            Tell me about your project...
          </label>

          {errors.message && (
            <p className="mt-2 flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={14} />
              {errors.message.message}
            </p>
          )}
        </div>
      </Reveal>

      {/* Trust Indicator & Premium Interactive Button Group */}
      <Reveal delay={0.20}>
        <div className="space-y-4">
          <p className="text-sm text-[var(--warm-grey)]">
          Your information is never shared.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[var(--accent)]
              px-8
              py-4
              text-[var(--warm-ivory)]
              transition-all
              duration-300
              hover:bg-[var(--accent)]
              hover:text-black
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]
              disabled:opacity-50
              disabled:cursor-not-allowed
              disabled:transform-none
              disabled:shadow-none
            "
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            <span>
              {loading ? "Sending Your Message..." : "Send Message"}
            </span>
          </button>
        </div>
      </Reveal>

      {/* Success Message Layout & Animation Upgrade */}
      {success && (
        <Reveal>
          <div
            className="
              rounded-2xl
              border
              border-green-500/30
              bg-green-500/10
              p-5
              text-green-400
            "
          >
            <h4 className="font-semibold mb-1 flex items-center gap-2">
              ✓ Message Sent Successfully
            </h4>
            <p className="text-sm text-green-400/90">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        </Reveal>
      )}
    </form>
  );
}