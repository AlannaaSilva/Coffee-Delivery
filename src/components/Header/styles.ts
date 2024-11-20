import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderButtonLocal = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
  background: ${(props) => props.theme.colors["brand-purple-light"]};
  color: ${(props) => props.theme.colors["brand-purple-dark"]};
  cursor: inherit;
`;

export const HeaderButtonShopping = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${(props) => props.theme.textSizes["text-regular-s"]};
  color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  background: ${(props) => props.theme.colors["brand-yellow-light"]};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.colors["base-white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }
`;

export const CategoryMenuContainer = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CategoryMenuItem = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors["base-text"]};
    font-weight: 700;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    }
  }

  /* Subcategorias */
  .subcategories {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${(props) => props.theme.colors["base-background"]};
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    width: max-content;
    z-index: 10;
  }

  /* Exibe as subcategorias quando a categoria estiver ativa */
  &:hover .subcategories {
    display: block;
  }

  .subcategories a {
    display: block;
    padding: 0.5rem 0;
    color: ${(props) => props.theme.colors["base-text"]};
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors["brand-yellow-light"]};
    }
  }
`;
