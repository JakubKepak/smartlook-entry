import * as S from './Styles';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

// components
import UserDetail from 'components/UserDetail/UserDetail';
import { UserInterface } from 'Types/User';

const MainContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export default function UserDetailPage(): React.ReactElement {
  const location = useLocation();
  const { user }: any = location.state;

  return (
    <MainContainer>
      <UserDetail user={user} />
    </MainContainer>
  );
}
