import { TitleText } from "../../../../components/typography";
import { coffees } from "../../../../data/coffees";
import { CoffeCard } from "../CoffeCard";
import { CatalogCoffeContainer, CoffeList } from "./style";


export function CatalogCoffe() {
  return (
  <CatalogCoffeContainer className="container">
    <TitleText size="l" color="subtitle">
      Nossos cafés
    </TitleText>

    <CoffeList>
      {coffees.map((coffee) => ( 
        <CoffeCard key={coffee.id} coffee={coffee}/>
      ))}
     
    </CoffeList>
  
  </CatalogCoffeContainer>

    
  )
    
}