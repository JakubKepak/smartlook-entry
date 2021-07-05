import styled from '@emotion/styled';

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorItem};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    cursor: pointer;
  }
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;

export const Body = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
