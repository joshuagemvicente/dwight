import { z } from "zod";

export const joinWaitlistSchema = z.object({
  email: z.string({ message: "Email is required." }).email().trim(),
});

export type JoinWaitlistDTO = z.infer<typeof joinWaitlistSchema>;
