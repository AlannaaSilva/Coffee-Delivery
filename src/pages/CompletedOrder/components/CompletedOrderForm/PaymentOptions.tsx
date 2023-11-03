import { useFormContext } from "react-hook-form";
import { PaymentMethod } from "../PaymentMethod";
import { PaymentOptionsContainer } from "./styles";
import { CreditCard, Money, Bank } from "phosphor-react";
import { RegularText } from "../../../../components/typography";


export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethod
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentOptionsContainer>
  );
}