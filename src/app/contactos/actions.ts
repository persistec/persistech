"use server";

import { CONTACT } from "@/data/site";

import type { ContactErrors, ContactState } from "./contact-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sends the contact message through Resend's HTTP API (no SDK dependency).
 * Requires `RESEND_API_KEY`; `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` are
 * optional overrides.
 */
export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot: humans never see this field; bots fill it automatically.
  const honeypot = String(formData.get("website") ?? "").trim();

  const errors: ContactErrors = {};

  if (!name) {
    errors.name = "O nome é obrigatório.";
  }

  if (!email) {
    errors.email = "O email é obrigatório.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Introduza um email válido.";
  }

  if (!message.trim()) {
    errors.message = "A mensagem é obrigatória.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // Honeypot: pretend success without sending anything.
  if (!honeypot) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return {
        status: "error",
        errors: {},
        message: `O envio automático está temporariamente indisponível. Envie-nos diretamente um email para ${CONTACT.email}.`,
      };
    }

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
          to: [process.env.CONTACT_TO_EMAIL ?? CONTACT.email],
          reply_to: email,
          subject: `[persistec.com] ${subject || "Contacto"} — ${name}`,
          text: [
            `Nome: ${name}`,
            `Email: ${email}`,
            `Empresa: ${company || "—"}`,
            `Assunto: ${subject || "—"}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      if (!response.ok) {
        return {
          status: "error",
          errors: {},
          message: `Não foi possível enviar neste momento. Tente novamente ou escreva para ${CONTACT.email}.`,
        };
      }
    } catch {
      return {
        status: "error",
        errors: {},
        message: `Não foi possível enviar neste momento. Tente novamente ou escreva para ${CONTACT.email}.`,
      };
    }
  }

  return { status: "success", errors: {} };
}
