import styled from '@emotion/styled';

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorItem};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Author = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-right: 0.3rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;

export const Body = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
