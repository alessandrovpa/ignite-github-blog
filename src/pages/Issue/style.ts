import styled from 'styled-components';

export const IssueContainer = styled.div``;

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme.backgroundProfile};
  border-radius: 8px;
  padding: 2rem;

  display: flex;
  gap: 2rem;
  > div {
    &:last-child {
      width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 2rem;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const ContentContainer = styled.main`
  padding: 1rem;
`;
