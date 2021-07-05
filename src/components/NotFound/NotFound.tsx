import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// components
import notFoundIllustration from 'assets/notfound.svg';

const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`;

const GoBackContainer = styled.div`
    font-weight: ${({theme}) => theme.fontWeight.extraBold};
`;

export default function NotFound(): React.ReactElement {
  return (
    <MainContainer>
      <NotFoundImage src={notFoundIllustration} />
      <GoBackContainer>
        <Link to='/'>Take me home</Link>
      </GoBackContainer>
    </MainContainer>
  );
}
