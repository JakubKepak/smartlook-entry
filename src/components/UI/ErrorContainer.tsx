import styled from '@emotion/styled';

const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children: React.ReactElement;
}

export default function ErrorContainer({ children }: Props): React.ReactElement {
  return <MainContainer>{children}</MainContainer>;
}
