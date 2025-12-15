import { useCheckoutStore } from "../store/store";
import { Step } from "./step";
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from "../validator/validator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ComboboxField } from "@/components/combox-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertCircle, Check, Copy } from "lucide-react";

// dummy data
const payTypes = [
  { value: "eth", label: "ETH", icon: "../src/assets/payType/eth.png" },
  {
    value: "usdt-ton",
    label: "USDT-TON",
    icon: "../src/assets/payType/usdt-ton.png",
  },
  {
    value: "usdt-bnb",
    label: "USDT-BNB",
    icon: "../src/assets/payType/usdt-bnb.png",
  },
  {
    value: "usdt-celo",
    label: "USDT-CELO",
    icon: "../src/assets/payType/usdt-celo.png",
  },
];

const currencies = [
  { value: "ngn", label: "NGN", icon: "../src/assets/ngn.png" },
];

const ethAddress = "02345678901234567890";
const transactionId = "0234567890";

function CryptoCash() {
  const amount = 500;
  const { currentStep, setStep, data, updateData, reset } = useCheckoutStore();
  const [copied, setCopied] = useState(false);
  console.log(data);

  // handleCopy
  const handleCopy = async (
    text: string,
    setCopied: (value: boolean) => void,
    timeout = 2000
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, timeout);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full h-full mt-5">
      {/* step 1 */}
      {currentStep === 1 && (
        <Step
          schema={step1Schema}
          defaultValues={{
            amount: amount,
            payType: data.payType,
            recieve: data.recieve,
            payFrom: data.payFrom,
            payTo: data.payTo,
          }}
          onSubmit={(data) => {
            updateData("amount", amount);
            updateData("payType", data.payType);
            updateData("recieve", data.recieve);
            updateData("payFrom", data.payFrom);
            updateData("payTo", data.payTo);
            setStep(currentStep + 1);
          }}
          currentStep={currentStep}
          setStep={setStep}
          isFirstStep
        >
          <div className="w-full space-y-4">
            {/* payType */}
            <FormField
              name="payType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col px-4 py-3 rounded-2xl border border-gray-300 ">
                      <span className="text-sm text-gray-500">You pay</span>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold"> 1.00</p>

                        <ComboboxField
                          value={field.value}
                          onChange={field.onChange}
                          options={payTypes}
                          placeholder="Select payment type"
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* recieve */}
            <FormField
              name="recieve"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col px-4 py-3 rounded-2xl border border-gray-300 ">
                      <span className="text-sm text-gray-500">You receive</span>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold"> 1.00</p>

                        <ComboboxField
                          value={field.value}
                          onChange={field.onChange}
                          options={currencies}
                          placeholder="Select currency"
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* payFrom */}
            <FormField
              name="payFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Pay from</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="py-5 w-full rounded-2xl border border-gray-300 ">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="metamask">Metamask</SelectItem>
                      <SelectItem value="rainbow">Rainbow</SelectItem>
                      <SelectItem value="walletconnect">
                        WalletConnect
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* payTo */}
            <FormField
              name="payTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Pay to</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="py-5 w-full rounded-2xl border border-gray-300 ">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="wwww">wwwww</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Step>
      )}

      {/* step 2 */}
      {currentStep === 2 && (
        <Step
          schema={step2Schema}
          defaultValues={{
            bank: data.bank,
            accountNumber: data.accountNumber,
            accountName: data.accountName,
          }}
          onSubmit={(data) => {
            updateData("bank", data.bank);
            updateData("accountNumber", data.accountNumber);
            updateData("accountName", data.accountName);
            setStep(currentStep + 1);
          }}
          currentStep={currentStep}
          setStep={setStep}
        >
          <div className="w-full space-y-4">
            {/* bank */}
            <FormField
              name="bank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Bank</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="py-5 w-full rounded-2xl border border-gray-300 ">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="moniepoint">Moniepoint</SelectItem>
                      <SelectItem value="firstbank">Firstbank</SelectItem>
                      <SelectItem value="gtbank">Gtbank</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* account number */}
            <FormField
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">
                    Account number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your account number"
                      className="py-5 w-full rounded-2xl border border-gray-300"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* account name */}
            <FormField
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Account name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm account name"
                      className="py-5 w-full rounded-2xl border border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Step>
      )}

      {/* step 3 */}
      {currentStep === 3 && (
        <Step
          schema={step3Schema}
          defaultValues={{
            receiptEmail: data.receiptEmail,
            receiptPhone: data.receiptPhone,
          }}
          onSubmit={(data) => {
            updateData("receiptEmail", data.receiptEmail);
            updateData("receiptPhone", data.receiptPhone);
            setStep(currentStep + 1);
          }}
          currentStep={currentStep}
          setStep={setStep}
        >
          <div className="w-full space-y-4">
            {/* receiptEmail */}
            <FormField
              name="receiptEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Receipt email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your receipt email"
                      type="email"
                      className="py-5 w-full rounded-2xl border border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* receiptPhone */}
            <FormField
              name="receiptPhone"
              render={({ field }) => {
                const [countryCode, setCountryCode] = useState("+234");

                return (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>

                    <FormControl>
                      <div className="flex items-center gap-2 border border-gray-300 rounded-2xl  focus-within:ring-2 focus-within:ring-gray-300">
                        <select
                          className="bg-gray-100 outline-none text-sm py-3 px-3 rounded-l-2xl border-r border-r-gray-300"
                          value={countryCode}
                          onChange={(e) => {
                            setCountryCode(e.target.value);
                            field.onChange(
                              `${e.target.value}${field.value || ""}`
                            );
                          }}
                        >
                          <option value="+234">🇳🇬 +234</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                        </select>

                        <Input
                          type="tel"
                          placeholder="000-000-0000"
                          className="border-0 shadow-none focus-visible:ring-0 px-0 py-0 flex-1"
                          value={field.value?.replace(countryCode, "") || ""}
                          onChange={(e) =>
                            field.onChange(`${countryCode}${e.target.value}`)
                          }
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </Step>
      )}

      {/* step 4 */}
      {currentStep === 4 && (
        <Step
          schema={step4Schema}
          defaultValues={{}}
          onSubmit={() => {
            setStep(currentStep + 1);
          }}
          currentStep={currentStep}
          setStep={setStep}
          isLastStep
        >
          <div className="w-full space-y-4">
            {/* payment address */}
            <div className="flex items-center gap-2 w-max mx-auto bg-teal-100/70 text-teal-900 py-1.5 px-4 rounded-2xl">
              <p className="text-sm font-medium">{ethAddress}</p>
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleCopy(ethAddress, setCopied)}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* summary */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4 ">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Amount to send</span>
                <div className="w-max flex items-center gap-1 text-sm text-gray-700">
                  {data.amount}
                  {data.payType.toUpperCase()}

                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => handleCopy(`${data?.amount}`, setCopied)}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Network</span>
                <p className="w-max flex items-center gap-1 text-sm text-gray-700">
                  {data.payType.toUpperCase()}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Wallet</span>
                <p className="w-max flex items-center gap-1 text-sm text-gray-700">
                  Other
                </p>
              </div>
            </div>

            {/* notice */}
            <div className="flex items-start gap-1 mt-5 text-gray-600">
              <div className="">
                <AlertCircle size={18} />
              </div>

              <p className="text-xs">
                Only send USDT to this address. Ensure the sender is on the CELO
                network otherwise you might lose your deposit
              </p>
            </div>
          </div>
        </Step>
      )}

      {/* step 5 / success */}
      {currentStep === 5 && (
        <Step
          schema={step4Schema}
          defaultValues={{}}
          onSubmit={() => {
            setStep(currentStep + 1);
          }}
          currentStep={currentStep}
          setStep={setStep}
        >
          <div className="w-full space-y-4">
            {/* payment address */}
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="bg-green-600 rounded-full p-2 mt-5">
                <Check size={25} className="text-white"/>
              </div>
              <p className="font-medium mt-5">Your transaction is processing</p>
              <p className="text-sm text-gray-500">The recipient will recieve it shortly</p>
            </div>

            {/* summary */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4 ">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Transaction ID</span>
                <div className="w-max flex items-center gap-1 text-sm text-gray-700">
                  {transactionId}

                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => handleCopy(transactionId, setCopied)}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* notice */}
            <button onClick={reset} className="flex items-start text-sm font-semibold w-max  mx-auto gap-1 mt-15 text-teal-900 cursor-pointer">
              Go back to home
            </button>
          </div>
        </Step>
      )}
    </div>
  );
}

export default CryptoCash;
