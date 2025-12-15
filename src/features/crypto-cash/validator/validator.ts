import { z } from "zod";

export const step1Schema = z.object({
  amount: z.coerce.number().min(1, "Amount must be at least 1"),
  payType: z.enum(["eth", "usdt-ton", "usdt-bnb", "usdt-ecelo"],{ message: "Select your payment type" }),
  recieve: z.enum(["ngn"],{ message: "Select your currency" }),
  payFrom: z.string().min(3,{ message: "Select your payment from" }),
  payTo: z.string().min(3,{ message: "Select your payment to" }),
});

export const step2Schema = z.object({
  bank: z.string().min(3,{ message: "Select your bank" }),
  accountNumber: z.string().min(3,{ message: "Enter account number" }),
  accountName: z.string().min(3,{ message: "Confirm account name" }),
});

export const step3Schema = z.object({
  receiptEmail: z.string().min(3,{ message: "Enter receipt email" }),
  receiptPhone: z.string().min(3,{ message: "Enter receipt phone" }),
});

export const step4Schema = z.object({ });


