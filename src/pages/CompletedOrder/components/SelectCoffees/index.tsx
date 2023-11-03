import { TitleText } from "../../../../components/typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeesCart } from "../CoffeesCart";
import { Confirmationsection } from "./ConfirmationSection";
import { DetailsContainer, SelectCoffeesContainer } from "./styles";

export function SelectCoffees() {
  const { cartItems } = useCart()
  return(
    <SelectCoffeesContainer>
      <TitleText size= "xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map (item =>(
          <CoffeesCart key={item.id} coffee={item}/>

        ))}
       
       

       <Confirmationsection/>
      </DetailsContainer>
    </SelectCoffeesContainer>
  )
}