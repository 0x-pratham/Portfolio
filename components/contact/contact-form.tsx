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
            border-white/10
            bg-white/[0.03]
            p-4
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
            border-white/10
            bg-white/[0.03]
            p-4
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
            border-white/10
            bg-white/[0.03]
            p-4
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
          bg-white
          px-6
          py-4
          text-black
        "
      >
        {loading
          ? "Sending..."
          : "Send Message"}
      </button>

      {success && (
        <p className="text-green-400">
          Message sent successfully.
        </p>
      )}
    </form>
  );
}