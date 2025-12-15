import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Form } from "@/components/ui/form";

interface StepProps<T extends z.ZodType<any, any>> {
  schema: T;
  defaultValues: z.infer<T>;
  onSubmit: (data: z.infer<T>) => void;
  children: React.ReactNode;
  isLastStep?: boolean;
  isFirstStep?: boolean;
  currentStep: number;
  setStep: (step: number) => void;
}

export function Step<T extends z.ZodType<any, any>>({
  schema,
  defaultValues,
  onSubmit,
  children,
  isLastStep = false,
  isFirstStep = false,
  currentStep,
}: StepProps<T>) {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => onSubmit(data as z.output<T>))}
          className="min-w-full h-full space-y-3 flex flex-col relative "
        >
          <div className="flex-1 min-h-96 overflow-auto">{children}</div>

          {currentStep < 5 && (
            <div className="w-full  sticky! bottom-0 ">
              <Button
                type="submit"
                variant={"default"}
                className="w-full py-5 bg-[#013941] hover:bg-[#013941]/90 rounded-2xl cursor-pointer"
              >
                {isLastStep
                  ? "I have sent it"
                  : isFirstStep
                  ? "Convert Now"
                  : "Next"}
              </Button>
            </div>
          )}
        </form>
      </Form>
    </FormProvider>
  );
}
