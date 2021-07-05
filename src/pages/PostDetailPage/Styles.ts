import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorItem};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  width: 100%;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
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

export const CommentsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundColorItem};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CommentsHeader = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;
