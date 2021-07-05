import styled from '@emotion/styled';

const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NotFound(): React.ReactElement {
  return (
    <MainContainer>
      <span>404</span>
    </MainContainer>
  );
}
