import { ContentContainer, PaymentMethodContainer } from "./styles";
import {InputHTMLAttributes, ReactNode, forwardRef} from "react";

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};


export const PaymentMethod = forwardRef<HTMLInputElement,PaymentMethodProps>((
  {id, icon, label, ...props}, ref)=>{
  return(
    <PaymentMethodContainer>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
    <label htmlFor={id}>
    <ContentContainer >
      {icon}
      {label}
    </ContentContainer>
    </label>
     
  </PaymentMethodContainer>
  )

})