import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: ${(props) => props.theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0 8rem;
  background: linear-gradient(180deg, #0b1b2b, #071422);
`;
