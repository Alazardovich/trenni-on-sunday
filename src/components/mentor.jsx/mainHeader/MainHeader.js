import { ContainerStyled } from '../_styled/Container.styled';
import { HeaderStyled } from './MainHeader.styled';

const MainHeader = () => {
  return (
    <HeaderStyled>
      <ContainerStyled display="flex">
        <button className="header-btn" type="button">
          Бургер
        </button>
        <h1 className="header-title">Журнал расходов</h1>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default MainHeader;
