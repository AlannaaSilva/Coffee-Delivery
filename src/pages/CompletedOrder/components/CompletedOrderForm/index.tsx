import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/typography";
import { SectionTitle } from "../SectionTitle";
import { CompletedOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine,CurrencyDollar } from "phosphor-react";
import { AdressForm } from "./AdressForm";
import { PaymentOptions } from './PaymentOptions';

export function CompletedOrderForm() {
  const { colors } = useTheme();
  return(
  <CompletedOrderFormContainer>
    <TitleText size="xs" color="subtitle">
      Complete seu pedido
    </TitleText>
    <FormSectionContainer>
      <SectionTitle
        title="Endereço de Entrega"
        subtitle="Informe o seu endereço onde deseja receber o seu pedido"
        icon={<MapPinLine color= {colors["brand-yellow-dark"]} size={22}/>}
      />
      <AdressForm/>
    </FormSectionContainer>

    <FormSectionContainer>
      <SectionTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyDollar color= {colors["brand-purple"]} size={22}/>}
      />
      <PaymentOptions/>
    </FormSectionContainer>
  </CompletedOrderFormContainer>)
}