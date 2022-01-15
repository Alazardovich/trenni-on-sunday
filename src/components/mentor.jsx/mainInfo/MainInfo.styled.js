import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled(MainWrapper)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  & h2 {
    color: ${({ titleColor }) => titleColor};
  }
`;

export const Item = styled(TitleWrapper)`
  padding: 5px 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ btnColor }) => btnColor};
  color: white;
  font-weight: 700;
`;
