import { HeaderButtonLocal, HeaderButtonContainer, HeaderContainer, HeaderButtonShopping } from "./styles";
import logoCoffeDelivery  from "../../assets/logoCoffeDelivery.svg"
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";


export function Header() {

  const {cartQuantity} = useCart()

  return(
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffeDelivery}/>
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButtonLocal>
            <MapPin size={20} weight="fill" color="#8047F8"/>
            São Luis, MA
          </HeaderButtonLocal>
          <NavLink to="/completedOrder">
            <HeaderButtonShopping>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill"/>
            </HeaderButtonShopping>
          </NavLink>
        </HeaderButtonContainer>

      </div>

    </HeaderContainer>
  )
}