import { TitleText } from "../../../../components/typography";
import { coffees } from "../../../../data/coffees";
import { CoffeCard } from "../CoffeCard";
import { CatalogCoffeContainer, CoffeList } from "./style";

export function CatalogCoffe() {
  return (
    <CatalogCoffeContainer className="container">
      <TitleText size="l" color="subtitle">
        Catálogo de Café ☕️
      </TitleText>
      {coffees.map((category) => (
        <div key={category.category}>
          <CoffeList>
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
          </CoffeList>
        </div>
      ))}
    </CatalogCoffeContainer>
  );
}
