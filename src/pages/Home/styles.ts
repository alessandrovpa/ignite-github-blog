import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form {
    input {
      width: 100%;
      padding: 0.5rem 1rem;
      background: ${(props) => props.theme.backgroundInput};
      border: 2px solid ${(props) => props.theme.border};
      border-radius: 4px;
      color: ${(props) => props.theme.text};
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
