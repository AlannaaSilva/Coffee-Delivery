import { useParams } from "react-router-dom";
import { accessories } from "../../data/accessories";
import { TitleText } from "../../components/typography";
import { CoffeCard } from "../Home/components/CoffeCard";
import { CoffeList } from "../Home/components/catalogCoffe/style";

export function AccessoriesSubTypePage() {
  const { type, subType } = useParams();

  const selectedCoffees = accessories
    .flatMap((category) => category.subcategories)
    .flatMap((subcategory) => subcategory.subtypes) 
    .flatMap((subtype) => subtype.items)
    .filter((coffee) => {
      const matchesType = coffee.tags.some((tag) => tag.toLowerCase() === type?.toLowerCase());
      const matchesSubType = coffee.tags.some((tag) => tag.toLowerCase() === subType?.toLowerCase());
      return matchesType && matchesSubType;
    });


  return (
    <div className="container">
      <TitleText size="l" color="subtitle">
        Acessórios do tipo {type.charAt(0).toUpperCase() + type?.slice(1)} 🫶🏼
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
