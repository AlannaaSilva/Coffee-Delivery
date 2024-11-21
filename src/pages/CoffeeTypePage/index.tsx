import { useParams } from "react-router-dom";
import { coffees } from "../../data/coffees";
import { TitleText } from "../../components/typography";
import { CoffeCard } from "../Home/components/CoffeCard";
import { CoffeList } from "../Home/components/catalogCoffe/style";

export function CoffeeTypePage() {
  const { type } = useParams();

  // Filtra os cafés pela subcategoria e subtipo (gourmet, extraforte, etc)
  const selectedCoffees = coffees
    .flatMap((category) => category.subcategories) // Itera sobre as subcategorias de "Café"
    .flatMap((subcategory) => subcategory.subtypes) // Itera sobre os subtipos (Grãos -> Gourmet, etc)
    .flatMap((subtype) => subtype.items) // Acessa os itens de cada subtipo
    .filter((coffee) => {
      // Verifica se o tipo de café está no caminho de tags, subcategoria ou subtipo
      return coffee.tags.some(tag => tag.toLowerCase() === type?.toLowerCase());
    });

    console.log(type)

  return (
    <div className="container">
      <TitleText size="l" color="subtitle">
        Cafés do tipo {type.charAt(0).toUpperCase() + type?.slice(1)} ☕️
      </TitleText>

      {selectedCoffees && selectedCoffees.length > 0 ? (
        <CoffeList>
          {selectedCoffees.map((coffee) => (
            <CoffeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeList>
      ) : (
        <p>Não há cafés disponíveis para este tipo.</p>
      )}
    </div>
  );
}
