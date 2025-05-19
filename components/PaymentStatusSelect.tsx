import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { AuthformSchema } from "@/lib/utils";

interface PaymentStatusSelectProps {
  control: Control<z.infer<typeof AuthformSchema>>;
  name: FieldPath<z.infer<typeof AuthformSchema>>;
  label: string;
}

const PaymentStatusSelect = ({
  control,
  name,
  label,
}: PaymentStatusSelectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <select className="input-class" {...field}>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default PaymentStatusSelect;
