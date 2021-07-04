import styled from '@emotion/styled';

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorItem};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  width: 100%;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const DetailSectionContainer = styled.div`
  display: grid;
  grid-gap: 0.7rem;
  align-content: start;
`;

export const MapContainer = styled.div`
  margin-top: 1rem;
`;

export const DetailItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailItem = styled.span``;

export const DetailItemLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.fontColorGrey};
`;
