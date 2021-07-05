import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Body = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.fontColorGrey};
`;
