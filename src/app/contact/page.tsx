"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Contact us</h1>
      <p className="mt-2 text-muted-foreground">
        Questions about an order, a base attachment, or a warranty claim — send us a message and
        we&apos;ll get back to you.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          setTimeout(() => {
            toast.success("Message sent — we'll reply within 1-2 business days.");
            (e.target as HTMLFormElement).reset();
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={5} required />
        </div>
        <Button type="submit" size="lg" className="w-fit" disabled={submitting}>
          <Mail className="size-4" /> {submitting ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  );
}
