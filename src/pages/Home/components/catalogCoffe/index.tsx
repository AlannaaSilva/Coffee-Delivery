import { TitleText } from "../../../../components/typography";
import { productTree } from "../../../../data/coffees";
import { CoffeCard } from "../CoffeCard";
import { CatalogCoffeContainer, CoffeList } from "./style";


export function CatalogCoffe() {
  return (
  <CatalogCoffeContainer className="container">
    <TitleText size="l" color="subtitle">
      Nossos cafés
    </TitleText>

    <CoffeList>
      {productTree.map((coffee) => ( 
        <CoffeCard key={coffee.id} coffee={coffee}/>
      ))}
     
    </CoffeList>
  
  </CatalogCoffeContainer>

    
  )
    
}