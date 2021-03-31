/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

import { stripe } from '../../../services';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json('Method not allowed');
  }

  const { user } = await getSession({ req });

  const stripeCustomer = await stripe.customers.create({
    name: user.name,
    email: user.email,
  });

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [{ price: process.env.STRIPE_SUBSCRIPTION_PRICE, quantity: 1 }],
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: `${process.env.HOST_URL}/posts`,
    cancel_url: `${process.env.HOST_URL}`,
  });

  return res.status(200).json({ sessionId: stripeCheckoutSession.id });
};
