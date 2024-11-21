import { useParams } from "react-router-dom";
import { complements } from "../../data/complements"; // Importando os dados de cafés
import { TitleText } from "../../components/typography";
import { CoffeCard } from "../Home/components/CoffeCard";
import { CoffeList } from "../Home/components/catalogCoffe/style";

export function ComplementsTypePage() {
  const { type } = useParams();

  const selectedCoffees = complements
    .flatMap((category) => category.subcategories)
    .flatMap((subcategory) => subcategory.subtypes)
    .flatMap((subtype) => subtype.items)
    .filter((coffee) => {
      return coffee.tags.some(tag => tag.toLowerCase() === type?.toLowerCase());
    });

  return (
    <div className="container">
      <TitleText size="l" color="subtitle">
        Complementos do tipo {type.charAt(0).toUpperCase() + type?.slice(1)} 🙌🏼
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
