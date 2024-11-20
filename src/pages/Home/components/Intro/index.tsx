import {
  IntroContainer,
  IntroContent,
  IntroTitle,
  IntroRegularText,
  ServiceContainer,
} from "./styles";
import coffeIntro from "../../../../assets/coffeIntro.png";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre os melhores artigos para café, para qualquer momento do
              dia
            </IntroTitle>
            <IntroRegularText size="l" color="subtitle" as="h3">
              Com a CoffeeShop, você recebe os melhores artigos para café onde
              estiver, a qualquer hora.
            </IntroRegularText>
          </section>
          <ServiceContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Qualidade dos produtos"
            />

            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />

            <InfoWithIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="Uma experiência única"
            />
          </ServiceContainer>
        </div>

        <img src={coffeIntro} style={{ width: "50%", height: "auto" }} />
      </IntroContent>
    </IntroContainer>
  );
}
