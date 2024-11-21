import {
  HeaderButtonLocal,
  HeaderButtonContainer,
  HeaderContainer,
  HeaderButtonShopping,
  CategoryMenuContainer,
  CategoryMenuItem,
  SubCategoryMenu,
  SubCategoryMenuItem,
  SubCategoryItem,
  SubCategoryMenuSubtypes
} from "./styles"; // Adicionando novos estilos
import logoCoffe from "../../assets/logoCoffe.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { coffees } from "../../data/coffees";
import { accessories } from "../../data/accessories";
import { complements } from "../../data/complements";

export function Header() {
  const { cartQuantity } = useCart();

  const [isCoffeesSubCategoryVisible, setIsCoffeesSubCategoryVisible] = useState(false);
  const [isAccessoriesSubCategoryVisible, setIsAccessoriesSubCategoryVisible] = useState(false);
  const [isComplementsSubCategoryVisible, setIsComplementsSubCategoryVisible] = useState(false);
  const [isSubtypesVisible, setIsSubtypesVisible] = useState<string | null>(null); // Estado para mostrar subtipos

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffe} style={{ width: "150px", height: "auto" }} />
        </NavLink>

        <CategoryMenuContainer>
          <CategoryMenuItem
            onMouseEnter={() => setIsCoffeesSubCategoryVisible(true)}
            onMouseLeave={() => setIsCoffeesSubCategoryVisible(false)}
          >
            <NavLink to="/category/cafes">Cafés</NavLink>
            {isCoffeesSubCategoryVisible && (
              <SubCategoryMenu>
                {coffees.map((category) => (
                  <>
                    <div>{category.category}</div>
                    <div>
                    {category.subcategories.map((subcategory) => (
                        <SubCategoryMenuItem
                          key={subcategory.type}
                          onMouseEnter={() => setIsSubtypesVisible(subcategory.type)}
                          onMouseLeave={() => setIsSubtypesVisible(null)}
                        >
                          <NavLink to={`/category/cafes/${subcategory.type}`}>
                            {subcategory.type}
                          </NavLink>

                          {isSubtypesVisible === subcategory.type && (
                            <SubCategoryMenuSubtypes>
                              {subcategory.subtypes.map((subtype) => (
                                <SubCategoryItem key={subtype.type}>
                                  <NavLink to={`/category/cafes/${subcategory.type}/${subtype.type}`}>
                                    {subtype.type}
                                  </NavLink>
                                </SubCategoryItem>
                              ))}
                            </SubCategoryMenuSubtypes>
                          )}
                        </SubCategoryMenuItem>
                      ))}
                    </div>
                  </>
                ))}
              </SubCategoryMenu>
            )}
          </CategoryMenuItem>

          <CategoryMenuItem
            onMouseEnter={() => setIsAccessoriesSubCategoryVisible(true)}
            onMouseLeave={() => setIsAccessoriesSubCategoryVisible(false)}
          >
            <NavLink to="/category/acessorios">Acessórios</NavLink>
            {isAccessoriesSubCategoryVisible && (
              <SubCategoryMenu>
                {accessories.map((category) => (
                  <>
                    <div>{category.category}</div>
                    <div>
                    {category.subcategories.map((subcategory) => (
                        <SubCategoryMenuItem
                          key={subcategory.type}
                          onMouseEnter={() => setIsSubtypesVisible(subcategory.type)}
                          onMouseLeave={() => setIsSubtypesVisible(null)}
                        >
                          <NavLink to={`/category/acessorios/${subcategory.type}`}>
                            {subcategory.type}
                          </NavLink>

                          {isSubtypesVisible === subcategory.type && (
                            <SubCategoryMenuSubtypes>
                              {subcategory.subtypes.map((subtype) => (
                                <SubCategoryItem key={subtype.type}>
                                  <NavLink to={`/category/acessorios/${subcategory.type}/${subtype.type}`}>
                                    {subtype.type}
                                  </NavLink>
                                </SubCategoryItem>
                              ))}
                            </SubCategoryMenuSubtypes>
                          )}
                        </SubCategoryMenuItem>
                      ))}
                    </div>
                  </>
                ))}
              </SubCategoryMenu>
            )}
          </CategoryMenuItem>

          <CategoryMenuItem
            onMouseEnter={() => setIsComplementsSubCategoryVisible(true)}
            onMouseLeave={() => setIsComplementsSubCategoryVisible(false)}
          >
            <NavLink to="/category/complementos">Complementos</NavLink>
            {isComplementsSubCategoryVisible && (
              <SubCategoryMenu>
                {complements.map((category) => (
                  <>
                    <div>{category.category}</div>
                    <div>
                    {category.subcategories.map((subcategory) => (
                        <SubCategoryMenuItem
                          key={subcategory.type}
                          onMouseEnter={() => setIsSubtypesVisible(subcategory.type)}
                          onMouseLeave={() => setIsSubtypesVisible(null)}
                        >
                          <NavLink to={`/category/complementos/${subcategory.type}`}>
                            {subcategory.type}
                          </NavLink>

                          {isSubtypesVisible === subcategory.type && (
                            <SubCategoryMenuSubtypes>
                              {subcategory.subtypes.map((subtype) => (
                                <SubCategoryItem key={subtype.type}>
                                  <NavLink to={`/category/complementos/${subcategory.type}/${subtype.type}`}>
                                    {subtype.type}
                                  </NavLink>
                                </SubCategoryItem>
                              ))}
                            </SubCategoryMenuSubtypes>
                          )}
                        </SubCategoryMenuItem>
                      ))}
                    </div>
                  </>
                ))}
              </SubCategoryMenu>
            )}
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
