import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 1.5rem;
  background: ${(props) => props.theme.backgroundProfile};
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme.title};
    }

    span {
      white-space: nowrap;
    }
  }

  p {
    color: ${(props) => props.theme.subtitle};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
