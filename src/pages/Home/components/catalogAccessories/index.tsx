import { TitleText } from "../../../../components/typography";
import { accessories } from "../../../../data/accessories";
import { CatalogAccessoriesContainer, AccessoriesList } from "./style";
import { CoffeCard } from "../CoffeCard";

export function CatalogAccessories() {
  return (
    <CatalogAccessoriesContainer className="container">
      <TitleText size="l" color="subtitle">
        Catálogo de Acessórios 🫶🏼
      </TitleText>
      <AccessoriesList>
        {accessories.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </AccessoriesList>
    </CatalogAccessoriesContainer>
  );
}
