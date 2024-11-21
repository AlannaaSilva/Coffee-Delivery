import { useParams } from "react-router-dom";
import { coffees } from "../../data/coffees";
import { TitleText } from "../../components/typography";
import { CoffeCard } from "../Home/components/CoffeCard";
import { CoffeList } from "../Home/components/catalogCoffe/style";

export function CoffeeSubTypePage() {
  const { type, subType } = useParams();

  const selectedCoffees = coffees
    .flatMap((category) => category.subcategories) // Itera pelas subcategorias
    .flatMap((subcategory) => subcategory.subtypes) // Itera pelos subtipos
    .flatMap((subtype) => subtype.items) // Acessa os itens (cafés)
    .filter((coffee) => {
      // Verifica se o tipo e o subtipo de café coincidem com os parâmetros da URL
      const matchesType = coffee.tags.some((tag) => tag.toLowerCase() === type?.toLowerCase());
      const matchesSubType = coffee.tags.some((tag) => tag.toLowerCase() === subType?.toLowerCase());
      return matchesType && matchesSubType;
    });


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
