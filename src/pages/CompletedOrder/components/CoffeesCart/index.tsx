import { Trash } from "phosphor-react";
import { RegularText } from "../../../../components/typography";
import { ActionsContainer, CoffeesCartContainer, RemoveButton } from "./styles";
import { QuatityItem } from "../../../../components/QuantityItem";
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps{
  coffee: CartItem
}
export function CoffeesCart({coffee}: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem} = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal);


  return(
    <CoffeesCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`}/>

        <div>
          <RegularText color="subtitle"> {coffee.name}</RegularText>
          <ActionsContainer>
          <QuatityItem
            size= "small"
            onIncrease={handleIncrease}
            onDecrease={handleDecrease} 
            quantity={coffee.quantity}/>
          <RemoveButton onClick={handleRemove}>
            <Trash size={16}/>
            REMOVER
          </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p> 
    </CoffeesCartContainer>
  )
}