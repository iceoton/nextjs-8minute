"use server";

import { updateUser } from "@/app/data-access/user";
import { revalidatePath } from "next/cache";

export async function updateNameAction(
  prevState: {
    userId: string;
  },
  formData: FormData
) {
  const userId = prevState.userId;
  const newName = formData.get("name") as string;
  await updateUser(userId, newName);
  revalidatePath(`/users/${userId}`);
  return {
    userId: userId,
    name: "",
    message: "success",
  };
}
