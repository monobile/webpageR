"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Locale, Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";

/**
 * Catering inquiry form.
 *
 * There is no backend connected yet, so the form deliberately does NOT
 * pretend to "send" anything. After validation it produces a formatted
 * inquiry message the guest can copy and send via Instagram, dictate over
 * the phone, or (when `contact.whatsappEnabled` is switched on in
 * `data/contact.ts`) hand off to WhatsApp with one tap. See README for
 * how to connect a real backend endpoint instead.
 */

const inputClass =
  "min-h-12 w-full rounded-xl border border-raydan-muted/40 bg-white px-4 text-base text-raydan-text placeholder:text-raydan-muted/70 focus:border-raydan-gold";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-semibold text-red-800">
      {message}
    </p>
  );
}

export default function CateringForm({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  const f = t.catering.form;
  const r = t.catering.review;
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(1, f.errors.nameRequired),
        phone: z
          .string()
          .trim()
          .min(1, f.errors.phoneRequired)
          .regex(/^\+?[0-9()\s-]{7,20}$/, f.errors.phoneInvalid),
        date: z.string().min(1, f.errors.dateRequired),
        guests: z
          .string()
          .min(1, f.errors.guestsRequired)
          .refine((value) => {
            const n = Number(value);
            return Number.isInteger(n) && n >= 1 && n <= 1000;
          }, f.errors.guestsInvalid),
        eventType: z.string().min(1, f.errors.eventTypeRequired),
        dishes: z.string(),
        comment: z.string(),
        consent: z.boolean().refine((value) => value, f.errors.consentRequired),
      }),
    [f],
  );

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      guests: "",
      eventType: "",
      dishes: "",
      comment: "",
      consent: false,
    },
  });

  function onSubmit(values: FormValues) {
    const lines = [
      r.messageTitle,
      "",
      `${r.fieldName}: ${values.name}`,
      `${r.fieldPhone}: ${values.phone}`,
      `${r.fieldDate}: ${values.date}`,
      `${r.fieldGuests}: ${values.guests}`,
      `${r.fieldEventType}: ${values.eventType}`,
    ];
    if (values.dishes.trim()) lines.push(`${r.fieldDishes}: ${values.dishes}`);
    if (values.comment.trim())
      lines.push(`${r.fieldComment}: ${values.comment}`);
    setMessage(lines.join("\n"));
    setCopied(false);
  }

  async function copyMessage() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard can be blocked; the text stays selectable below.
    }
  }

  if (message) {
    return (
      <div className="rounded-3xl border border-raydan-gold/50 bg-raydan-paper p-7 sm:p-9">
        <h3 className="font-display text-2xl font-bold">{r.heading}</h3>
        <p className="mt-3 text-sm leading-relaxed text-raydan-muted">
          {r.text}
        </p>
        <pre
          dir="auto"
          className="mt-5 max-h-64 overflow-auto rounded-xl border border-raydan-muted/25 bg-white p-4 font-sans text-sm whitespace-pre-wrap text-raydan-text"
        >
          {message}
        </pre>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyMessage}
            className="inline-flex min-h-11 items-center rounded-full bg-raydan-text px-5 text-sm font-bold text-raydan-ivory transition-colors hover:bg-raydan-black"
          >
            {copied ? r.copied : r.copy}
          </button>
          {contact.whatsappEnabled && (
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-raydan-gold px-5 text-sm font-semibold text-raydan-text transition-colors hover:bg-raydan-gold/10"
            >
              {r.whatsapp}
            </a>
          )}
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-raydan-gold px-5 text-sm font-semibold text-raydan-text transition-colors hover:bg-raydan-gold/10"
          >
            {r.instagram}
          </a>
          <a
            href={contact.phoneHref}
            className="inline-flex min-h-11 items-center rounded-full border border-raydan-gold px-5 text-sm font-semibold text-raydan-text transition-colors hover:bg-raydan-gold/10"
          >
            {r.call}
          </a>
          <button
            type="button"
            onClick={() => setMessage(null)}
            className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold text-raydan-muted transition-colors hover:text-raydan-text"
          >
            {r.back}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-raydan-gold/50 bg-raydan-paper p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="catering-name" className="mb-1.5 block text-sm font-bold">
            {f.name}
          </label>
          <input
            id="catering-name"
            type="text"
            autoComplete="name"
            placeholder={f.namePlaceholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "catering-name-error" : undefined}
            className={inputClass}
            {...register("name")}
          />
          <FieldError id="catering-name-error" message={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="catering-phone" className="mb-1.5 block text-sm font-bold">
            {f.phone}
          </label>
          <input
            id="catering-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder={f.phonePlaceholder}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "catering-phone-error" : undefined}
            className={`${inputClass} ${locale === "ar" ? "text-end" : ""}`}
            {...register("phone")}
          />
          <FieldError id="catering-phone-error" message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="catering-date" className="mb-1.5 block text-sm font-bold">
            {f.date}
          </label>
          <input
            id="catering-date"
            type="date"
            aria-invalid={errors.date ? true : undefined}
            aria-describedby={errors.date ? "catering-date-error" : undefined}
            className={inputClass}
            {...register("date")}
          />
          <FieldError id="catering-date-error" message={errors.date?.message} />
        </div>

        <div>
          <label htmlFor="catering-guests" className="mb-1.5 block text-sm font-bold">
            {f.guests}
          </label>
          <input
            id="catering-guests"
            type="number"
            inputMode="numeric"
            min={1}
            max={1000}
            placeholder={f.guestsPlaceholder}
            aria-invalid={errors.guests ? true : undefined}
            aria-describedby={errors.guests ? "catering-guests-error" : undefined}
            className={inputClass}
            {...register("guests")}
          />
          <FieldError
            id="catering-guests-error"
            message={errors.guests?.message}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="catering-type" className="mb-1.5 block text-sm font-bold">
            {f.eventType}
          </label>
          <select
            id="catering-type"
            aria-invalid={errors.eventType ? true : undefined}
            aria-describedby={errors.eventType ? "catering-type-error" : undefined}
            className={inputClass}
            defaultValue=""
            {...register("eventType")}
          >
            <option value="" disabled>
              {f.eventTypePlaceholder}
            </option>
            {f.eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError
            id="catering-type-error"
            message={errors.eventType?.message}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="catering-dishes" className="mb-1.5 block text-sm font-bold">
            {f.dishes}
          </label>
          <input
            id="catering-dishes"
            type="text"
            placeholder={f.dishesPlaceholder}
            className={inputClass}
            {...register("dishes")}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="catering-comment" className="mb-1.5 block text-sm font-bold">
            {f.comment}
          </label>
          <textarea
            id="catering-comment"
            rows={3}
            placeholder={f.commentPlaceholder}
            className={`${inputClass} py-3`}
            {...register("comment")}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-sm">
          <input
            type="checkbox"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "catering-consent-error" : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 accent-raydan-gold"
            {...register("consent")}
          />
          <span>{f.consent}</span>
        </label>
        <FieldError
          id="catering-consent-error"
          message={errors.consent?.message}
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-raydan-gold px-7 text-base font-bold text-raydan-black transition-colors hover:bg-raydan-light-gold sm:w-auto"
      >
        {f.submit}
      </button>
    </form>
  );
}
