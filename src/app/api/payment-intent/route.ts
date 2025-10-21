import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const { STRIPE_API_KEY } = process.env;

export const stripe = new Stripe(STRIPE_API_KEY as string, {
  apiVersion: "2025-09-30.clover",
});

interface StripeRequestBody {
  amount: number;
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { amount }: StripeRequestBody = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("error");
  }
};
