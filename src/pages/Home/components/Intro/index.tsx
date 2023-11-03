import { IntroContainer, IntroContent, IntroTitle, IntroRegularText, ServiceContainer } from "./styles";
import coffeIntro from "../../../../assets/coffeIntro.svg"
import {ShoppingCart, Timer, Package, Coffee} from "phosphor-react"
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { useTheme } from "styled-components";

export function Intro() {

  const {colors} = useTheme();

  return(
   <IntroContainer>
    <IntroContent className="container">
    <div>
      <section>
        <IntroTitle size="xl" >
          Encontre o café perfeito para qualquer hora do dia
        </IntroTitle>
        <IntroRegularText size="l" color="subtitle" as="h3">
          Com o Coffee Delivery você recebe seu café onde estiver, a
          qualquer hora
        </IntroRegularText>
      </section>
      <ServiceContainer>
        <InfoWithIcon
          iconBg= {colors["brand-yellow-dark"]}
          icon={<ShoppingCart  weight="fill" />} 
          text= "Compra simples e segura"
         />
        <InfoWithIcon
          iconBg={colors["base-text"]}
          icon={<Package weight="fill" />}
          text="Embalagem mantém o café intacto"
        />

        <InfoWithIcon
          iconBg={colors["brand-yellow"]}
          icon={<Timer weight="fill" />}
          text="Entrega rápida e rastreada"
        />
      
        <InfoWithIcon
          iconBg={colors["brand-purple"]}
          icon={<Coffee weight="fill" />}
          text="O café chega fresquinho até você"
        />
      

      </ServiceContainer>
    </div>
    
    <img src={coffeIntro}/>
      

    </IntroContent>
   </IntroContainer>
  )
}
