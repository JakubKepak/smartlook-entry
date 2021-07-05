import styled from '@emotion/styled';

// components
import empty from 'assets/empty.svg';
import ErrorContainer from 'components/UI/ErrorContainer';

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`;

export default function NoResults(): React.ReactElement {
  return (
    <ErrorContainer>
      <NotFoundImage src={empty} />
    </ErrorContainer>
  );
}
