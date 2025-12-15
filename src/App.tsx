import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CryptoCash from "./features/crypto-cash/components/crypto-cash";
import { useCheckoutStore } from "./features/crypto-cash/store/store";
import { MoveLeft } from "lucide-react";

type TabValue = "crypto-cash" | "cash-crypto" | "crypto-flat-loan";

function App() {
  const { currentStep, setStep } = useCheckoutStore();
  const [activeTab, setActiveTab] = useState<TabValue>("crypto-cash");

  return (
    <div className="min-h-screen w-full bg-black/80 flex items-center justify-center">
      <div className="max-w-[440px] min-h-[520px] w-full h-full bg-white rounded-2xl border border-slate-300 p-6">
        <div className="w-full flex flex-col h-full space-y-5">
          {/* Tabs header */}
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as TabValue)}
            className="max-w-xs w-full mx-auto"
          >
            {/* Tabs triggers */}
            {currentStep === 1 && (
              <TabsList className="grid grid-cols-3 p-0 rounded-3xl mx-auto text-sm">
                <TabsTrigger
                  value="crypto-cash"
                  className="rounded-3xl text-gray-500 text-xs data-[state=active]:bg-[#013941] data-[state=active]:text-white"
                >
                  Crypto to cash
                </TabsTrigger>

                <TabsTrigger
                  value="cash-crypto"
                  className="rounded-3xl text-gray-500 text-xs data-[state=active]:bg-[#013941] data-[state=active]:text-white"
                >
                  Cash to crypto
                </TabsTrigger>

                <TabsTrigger
                  value="crypto-flat-loan"
                  className="rounded-3xl text-gray-500 text-xs data-[state=active]:bg-[#013941] data-[state=active]:text-white"
                >
                  Crypto to flat loan
                </TabsTrigger>
              </TabsList>
            )}

            {currentStep > 1 && currentStep < 5 && (
              <div className="max-w-full flex items-center justify-between">
                <MoveLeft
                  className="cursor-pointer"
                onClick={() => setStep(currentStep - 1)}
                />

                <p className="font-medium text-lg text-gray-600">
                  Recipient details
                </p>

                <span />
              </div>
            )}

            {currentStep >= 5 && (
              <div className="max-w-full flex items-center justify-center gap-1">
                <img src="/nova.png" className="w-5 h-5" alt="logo" />
                <p className="font-bold text-lg  text-teal-900">NOVACRUST</p>
              </div>
            )}
          </Tabs>

          {/* Single content */}
          <div className=" flex-1 h-full">
            {activeTab === "crypto-cash" && <CryptoCash />}
            {activeTab === "cash-crypto" && (
              <div className="h-full">cash-crypto</div>
            )}
            {activeTab === "crypto-flat-loan" && (
              <div className="h-full">crypto-flat-loan</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
