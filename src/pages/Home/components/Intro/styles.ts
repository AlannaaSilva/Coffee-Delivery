import styled from "styled-components";
import backgroundIntro from "../../../../assets/BackgroundIntro.svg";
import { RegularText, TitleText } from "../../../../components/typography";

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;
  background: ${() => ` url(${backgroundIntro}) no-repeat center`};
  background-size: cover;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const IntroRegularText = styled(RegularText)``;
export const ServiceContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  .container {
    display: flex;
    gap: 1rem;
  }
`;
