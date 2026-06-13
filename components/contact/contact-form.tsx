"use client";

import { useState } from "react";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormValues,
} from "@/lib/validations";

export function ContactForm() {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver:
      zodResolver(contactSchema),
  });

  async function onSubmit(
    data: ContactFormValues
  ) {
    try {
      setLoading(true);

      const response =
        await fetch("/api/contact", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);

      reset();
    } catch {
      alert(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-6"
    >
      <div>
        <input
          {...register("name")}
          placeholder="Your Name"
          className="
w-full
rounded-2xl
border
border-[var(--border)]
bg-[var(--surface)]
px-5
py-4

text-[var(--warm-ivory)]

placeholder:text-[var(--warm-grey)]

transition-all
duration-300

hover:border-[var(--accent)]

focus:border-[var(--accent)]
focus:outline-none
"
        />

        {errors.name && (
          <p className="mt-2 text-red-400">
            {
              errors.name.message
            }
          </p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Your Email"
          className="
w-full
rounded-2xl
border
border-[var(--border)]
bg-[var(--surface)]
px-5
py-4

text-[var(--warm-ivory)]

placeholder:text-[var(--warm-grey)]

transition-all
duration-300

hover:border-[var(--accent)]

focus:border-[var(--accent)]
focus:outline-none
"
        />

        {errors.email && (
          <p className="mt-2 text-red-400">
            {
              errors.email.message
            }
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Tell me about your project..."
          className="
w-full
rounded-2xl
border
border-[var(--border)]
bg-[var(--surface)]
px-5
py-4

text-[var(--warm-ivory)]

placeholder:text-[var(--warm-grey)]

transition-all
duration-300

hover:border-[var(--accent)]

focus:border-[var(--accent)]
focus:outline-none
"
        />

        {errors.message && (
          <p className="mt-2 text-red-400">
            {
              errors.message.message
            }
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
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

disabled:opacity-50
disabled:cursor-not-allowed
"
      >
        {loading
          ? "Sending Your Message..."
          : "Send Message"}
      </button>

      {success && (
        <p
  className="
  rounded-2xl
  border
  border-green-500/30
  bg-green-500/10
  p-4
  text-green-400
  "
>
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      )}
    </form>
  );
}