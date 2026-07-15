"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/actions/contact";
import { Button } from "@/components/ui/Button";
import { SuccessPanel } from "./SuccessPanel";

const fieldClass =
  "w-full rounded-xl border border-brd bg-card px-[18px] py-[15px] text-[15px] text-fg outline-none focus:border-accent";

const initialContactState: ContactState = { status: "idle" };

export function ContactForm({ showSubject = true }: { showSubject?: boolean }) {
  const [state, formAction, isPending] = useActionState(submitContact, initialContactState);

  if (state.status === "success") {
    return <SuccessPanel message={state.message ?? ""} />;
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <input
          data-cursor="1"
          name="name"
          placeholder="Your Name"
          required
          className={fieldClass}
        />
        {state.fieldErrors?.name && (
          <p className="mt-1 text-xs text-red-400">{state.fieldErrors.name}</p>
        )}
      </div>
      <div>
        <input
          data-cursor="1"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={fieldClass}
        />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-xs text-red-400">{state.fieldErrors.email}</p>
        )}
      </div>
      {showSubject && (
        <input data-cursor="1" name="subject" placeholder="Subject" className={fieldClass} />
      )}
      <div>
        <textarea
          data-cursor="1"
          name="message"
          placeholder="Your Message"
          rows={showSubject ? 5 : 4}
          required
          className={`${fieldClass} resize-y`}
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-xs text-red-400">{state.fieldErrors.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isPending} icon={<span>✈</span>} className="w-full">
        {isPending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
