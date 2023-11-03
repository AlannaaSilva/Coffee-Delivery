import { Intro } from "./components/Intro";
import { CatalogCoffe } from "./components/catalogCoffe";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro/>
      <CatalogCoffe/>
    </HomeContainer>
  )
  
}