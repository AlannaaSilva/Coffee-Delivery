import { TitleText } from "../../../../components/typography";
import { CatalogComplementsContainer, ComplementList } from "./style";
import { CoffeCard } from "../CoffeCard";
import { complements } from "../../../../data/complements";

export function CatalogComplements() {
  return (
    <CatalogComplementsContainer className="container">
      <TitleText size="l" color="subtitle">
        Catálogo de Complementos 🙌🏼
      </TitleText>
      <ComplementList>
        {complements.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </ComplementList>
    </CatalogComplementsContainer>
  );
}
