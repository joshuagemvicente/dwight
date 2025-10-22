import { headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const { STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET } = process.env;

export const stripe = new Stripe(STRIPE_API_KEY as string, {
  apiVersion: "2025-09-30.clover",
});

export const GET = async () => {
  console.log("Webhook GET request received");
  return NextResponse.json({ message: "Webhook has been called." });
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature") as string;
    if (!STRIPE_WEBHOOK_SECRET) {
      throw new Error("STRIPE_WEBHOOK_SECRET is not defined");
    }
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET,
    );

    if (event.type === "payment_intent.succeeded") {
      // TODO: logic here.
    }
  } catch (error) {
    console.error("error");
    return NextResponse.json({ received: false });
  }
};
