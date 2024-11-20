import { useState } from "react";
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "Cafés",
      subcategories: ["Café Arábica", "Café Robusta", "Café Orgânico"],
    },
    {
      name: "Acessórios",
      subcategories: ["Moinhos", "Prensa Francesa", "Cafeteiras"],
    },
    {
      name: "Complementos",
      subcategories: ["Açúcar", "Leite Condensado", "Canela"],
    },
  ];

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffe} style={{ width: "150px", height: "auto" }} />
        </NavLink>
        <CategoryMenuContainer>
          {categories.map((category) => (
            <CategoryMenuItem
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
            >
              <NavLink to={`#`} >{category.name}</NavLink>

              {/* Exibir subcategorias quando a categoria for clicada */}
              {activeCategory === category.name && (
                <div className="subcategories">
                  {category.subcategories.map((subcategory) => (
                    <NavLink key={subcategory} to={`/category/${subcategory.toLowerCase()}`}>
                      {subcategory}
                    </NavLink>
                  ))}
                </div>
              )}
            </CategoryMenuItem>
          ))}
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
