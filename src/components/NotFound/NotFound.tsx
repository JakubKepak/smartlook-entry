import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// components
import notFoundIllustration from 'assets/notfound.svg';
import ErrorContainer from 'components/UI/ErrorContainer';

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`;

const GoBackContainer = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;

export default function NotFound(): React.ReactElement {
  return (
    <ErrorContainer>
      <>
        <NotFoundImage src={notFoundIllustration} />
        <GoBackContainer>
          <Link to='/'>Take me home</Link>
        </GoBackContainer>
      </>
    </ErrorContainer>
  );
}
