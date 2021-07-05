import styled from '@emotion/styled';

export const MainContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  width: 100%;
`;

export const Title = styled('div')`
  color: ${({ theme }) => theme.colors.fontColorLight};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;
