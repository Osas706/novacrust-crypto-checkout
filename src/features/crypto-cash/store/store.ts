import { create } from "zustand";

interface CheckoutData {
  amount: number;
  payType: "eth" | "usdt-ton" | "usdt-bnb" | "usdt-ecelo";
  recieve: "ngn" ;
  payFrom: string;
  payTo: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  receiptEmail: string;
  receiptPhone: string;
}

interface CheckoutStore {
  currentStep: number;
  setStep: (step: number) => void;

  data: CheckoutData;
  updateData: (field: keyof CheckoutData, value: any) => void;

  reset: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  currentStep: 1,

  data: {
    amount: 0,
    payType: "eth",
    recieve: "ngn",
    payFrom: "",
    payTo: "",
    bank: "",
    accountNumber: "",
    accountName: "",
    receiptEmail: "",
    receiptPhone: "",
  },

  updateData: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: value,
      },
    })),

  setStep: (step) => set({ currentStep: step }),

  reset: () =>
    set({
      currentStep: 1,
      data: {
        amount: 0,
        payType: "eth",
        recieve: "ngn",
        payFrom: "",
        payTo: "",
        bank: "",
        accountNumber: "",
        accountName: "",
        receiptEmail: "",
        receiptPhone: "",
      },
    }),
}));
