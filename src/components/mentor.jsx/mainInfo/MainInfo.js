import React from 'react';
import { ContainerStyled } from '../_styled/Container.styled';
import {
  Button,
  Item,
  MainWrapper,
  Section,
  TitleWrapper,
} from './MainInfo.styled';
var shortid = require('shortid');

const MainInfo = ({
  title,
  options,
  titleColor,
  btnColor,
  openActivePage,
  activePage,
}) => {
  return (
    <Section>
      <ContainerStyled display="flex">
        <MainWrapper>
          <TitleWrapper titleColor={titleColor}>
            <h2>{title}</h2>
            <p>RUB</p>
          </TitleWrapper>
          <ul>
            {options.map(({ period, sum }) => (
              <Item key={shortid.generate()}>
                <span>{period}</span>
                <span>{sum}</span>
              </Item>
            ))}
          </ul>
        </MainWrapper>
        <Button
          onClick={() => openActivePage(activePage)}
          type="button"
          btnColor={btnColor}
        >
          <span>+</span>
        </Button>
      </ContainerStyled>
    </Section>
  );
};
export default MainInfo;
