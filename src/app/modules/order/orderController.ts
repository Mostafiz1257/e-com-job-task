

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const stripe = require("stripe")(
  "sk_test_51NFUAjEsme57IV63dwFayl3ylE4AkUlo1HMudKyTVT6sfNyyW5xe64gKiApCMJxezmgww9UmkTVycPliakNYGiJl00W1rKS6SL"
);

const makePaymentController = async (req:any, res:any) => {
  const { products } = req.body;

  const lineItems = products?.map(
    (product: { name: string; price: number; quantity: number }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product?.name,
        },
        unit_amount: product?.price * 100,
      },
      quantity: product?.quantity,
    })
  );

  const session = await stripe?.checkout?.sessions?.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://mechanicalkeyboardclient.vercel.app/success",
    cancel_url: "https://mechanicalkeyboardclient.vercel.app/success",
  });

  res.json({ id: session?.id });
};

export default makePaymentController;