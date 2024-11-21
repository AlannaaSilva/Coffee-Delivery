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
      {accessories.map((category) => (
        <div key={category.category}>
          <AccessoriesList>
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
          </AccessoriesList>
        </div>
      ))}
    </CatalogAccessoriesContainer>
  );
}
