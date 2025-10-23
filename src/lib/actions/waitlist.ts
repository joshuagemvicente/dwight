"use server";

import { joinWaitlistSchema } from "@/utils/validations/waitlist";
import { db } from "@/lib/db";
import { DEFAULT_APP_SLUG } from "@/lib/constants";

export type WaitlistResult = {
  success: boolean;
  position?: number;
  message?: string;
};

export const joinWaitlist = async (
  formData: FormData,
): Promise<WaitlistResult> => {
  const rawData = {
    email: formData.get("email") as string,
  };

  const parsedData = joinWaitlistSchema.safeParse(rawData);

  if (!parsedData.success) {
    const fieldErrors = parsedData.error.flatten().fieldErrors;
    const firstError = Object.values(fieldErrors)[0]?.[0];
    return {
      success: false,
      message: firstError || "Invalid email address",
    };
  }
  const { email } = parsedData.data;

  try {
    console.log("entered try block");
    const existingEntry = await db.waitlistEntry.findUnique({
      where: {
        email_appSlug: {
          email: email.toLowerCase(),
          appSlug: DEFAULT_APP_SLUG,
        },
      },
    });
    if (existingEntry) {
      console.log("existing entry found");
      return {
        success: false,
        message: "This email is already on the waitlist.",
      };
    }

    const createdEntry = await db.waitlistEntry.create({
      data: {
        email: email.toLowerCase(),
        appSlug: DEFAULT_APP_SLUG,
      },
    });

    const currentPosition = await db.waitlistEntry.count({
      where: {
        appSlug: DEFAULT_APP_SLUG,
        createdAt: {
          lte: createdEntry.createdAt,
        },
      },
    });

    const totalCount = await db.waitlistEntry.count({
      where: {
        appSlug: DEFAULT_APP_SLUG,
      },
    });

    return {
      success: true,
      position: currentPosition,
      message: `You have successfully joined the waitlist! You will receive updates via email.`,
    };
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};
