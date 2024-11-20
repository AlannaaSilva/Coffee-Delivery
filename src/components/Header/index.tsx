import {
  HeaderButtonLocal,
  HeaderButtonContainer,
  HeaderContainer,
  HeaderButtonShopping,
  CategoryMenuContainer,
  CategoryMenuItem,
} from "./styles";
import logoCoffe from "../../assets/logoCoffe.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffe} style={{ width: "150px", height: "auto" }} />
        </NavLink>
        <CategoryMenuContainer>
          <CategoryMenuItem>
            <NavLink to="/category/cafes">Cafés</NavLink>
          </CategoryMenuItem>
          <CategoryMenuItem>
            <NavLink to="/category/acessorios">Acessórios</NavLink>
          </CategoryMenuItem>
          <CategoryMenuItem>
            <NavLink to="/category/complementos">Complementos</NavLink>
          </CategoryMenuItem>
        </CategoryMenuContainer>
        <HeaderButtonContainer>
          <HeaderButtonLocal>
            <MapPin size={20} weight="fill" color="#8047F8" />
            São Luis, MA
          </HeaderButtonLocal>
          <NavLink to="/completedOrder">
            <HeaderButtonShopping>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButtonShopping>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
