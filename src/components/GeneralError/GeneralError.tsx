import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// components
import generalErrorIllustration from 'assets/generalerror.svg';
import ErrorContainer from 'components/UI/ErrorContainer';

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`;

const GoBackContainer = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;

const MessageContainer = styled.div`
    margin-bottom: 1rem;
`;

export default function GeneralError(): React.ReactElement {
  return (
    <ErrorContainer>
      <>
        <NotFoundImage src={generalErrorIllustration} />
        <MessageContainer>Oh No! Something odd is going on.</MessageContainer>
        <GoBackContainer>
          <Link to='/'>Take me home</Link>
        </GoBackContainer>
      </>
    </ErrorContainer>
  );
}
