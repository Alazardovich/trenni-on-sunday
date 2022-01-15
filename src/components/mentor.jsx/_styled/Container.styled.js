import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 0 20px;
  width: 500px;
  display: ${({ display = 'block' }) => display};
  ${({ display = 'block' }) =>
    display === 'flex' ? 'align-items: center' : null};

  margin: 0 auto;
  outline: 1px solid green;
`;

// export const MainContainerStyled = styled(ContainerStyled)`
//   display: block;
// `;
