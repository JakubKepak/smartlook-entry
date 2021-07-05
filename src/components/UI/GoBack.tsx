import styled from '@emotion/styled';
import { useHistory } from 'react-router';

const MainContainer = styled.div``;

const GoBackMessage = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  padding-left: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export default function GoBack(): React.ReactElement {
  const history = useHistory();

  const onClickHandler = () => {
    history.goBack();
  };

  return (
    <MainContainer>
      <GoBackMessage onClick={onClickHandler}>Go Back</GoBackMessage>
    </MainContainer>
  );
}
