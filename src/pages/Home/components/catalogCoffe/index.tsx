import { TitleText } from "../../../../components/typography";
import { productTree } from "../../../../data/coffees";
import { CoffeCard } from "../CoffeCard";
import { CatalogCoffeContainer, CoffeList } from "./style";

interface Subcategory {
  subcategory: string;
  items?: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
    tags: string[];
  }[];
  subcategories?: Subcategory[]; // Suporte para subsubcategorias
}

// Função de verificação para garantir que a subcategoria tem 'items'
function hasItems(subcategory: Subcategory): subcategory is { subcategory: string; items: any[] } {
  return (subcategory as { subcategory: string; items: any[] }).items !== undefined;
}

export function CatalogCoffe() {
  return (
    <CatalogCoffeContainer className="container">
      <TitleText size="l" color="subtitle">
        Catálogo de Café ☕️
      </TitleText>

      <CoffeList>
        {productTree.map((coffee) => (
          <div key={coffee.category}>
            <h3>{coffee.category}</h3>
            {coffee.subcategories.map((subcategory) => (
              <div key={subcategory.subcategory}>
                <h4>{subcategory.subcategory}</h4>

                {/* Verificar se a subcategoria tem 'items' */}
                {hasItems(subcategory) ? (
                  subcategory.items.map((item) => (
                    <CoffeCard key={item.id} coffee={item} />
                  ))
                ) : (
                  <p>Sem itens para exibir.</p>
                )}

                {/* Renderização das subsubcategorias (se existirem) */}
                {subcategory.subcategories?.map((subSubcategory) => (
                  <div key={subSubcategory.subcategory}>
                    <h5>{subSubcategory.subcategory}</h5>
                    {hasItems(subSubcategory) && subSubcategory.items?.map((item) => (
                      <CoffeCard key={item.id} coffee={item} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </CoffeList>
    </CatalogCoffeContainer>
  );
}
