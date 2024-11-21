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
      {complements.map((category) => (
        <div key={category.category}>
          <ComplementList>
            {category.subcategories.map((subcategory) => (
              <>
                {subcategory.subtypes.map((subtype) => (
                  <div key={subtype.type}>
                    {subtype.items.map((coffee) => (
                      <CoffeCard key={coffee.id} coffee={coffee} />
                    ))}
                  </div>
                ))}
              </>
            ))}
          </ComplementList>
        </div>
      ))}
    </CatalogComplementsContainer>
  );
}
