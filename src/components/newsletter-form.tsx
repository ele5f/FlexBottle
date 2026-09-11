"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        toast.success("You're on the list — check your inbox for your code.");
        setEmail("");
      }}
    >
      <Input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-background"
      />
      <Button type="submit" className="shrink-0">
        Sign up
      </Button>
    </form>
  );
}
