"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateNameAction } from "./actions";
import { useRef } from "react";

export default function Form({ userId }: { userId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useFormState(updateNameAction, {
      userId,
      name: "",
      message: "",
  });
  if (state.message === "success") {
    formRef.current?.reset();
  }
  return (
    <form ref={formRef} action={action}>
      <input
        className="text-blue-800 border border-gray-300 p-2"
        type="text"
        name="name"
      />
      <SubmitButton />
    </form>
  );
}

export function SubmitButton() {
  const status = useFormStatus();
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
      {status.pending ? "Saving..." : "Save"}
    </button>
  );
}
