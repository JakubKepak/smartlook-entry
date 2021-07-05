import styled from '@emotion/styled';

const MainContainer = styled('div')`
  margin: 1rem 0;
  width: 95vw;
  max-width: 1000px;
`;

interface Props {
  children: React.ReactElement;
}

export default function PageLayout({ children }: Props): React.ReactElement {
  return <MainContainer>{children}</MainContainer>;
}
