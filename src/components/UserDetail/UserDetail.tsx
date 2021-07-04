import { UserInterface } from 'Types/User';
import * as S from './Styles';

interface Props {
  user: UserInterface;
}

export default function UserDetail({ user }: Props): React.ReactElement {
  return (
    <S.MainContainer>
      <S.DetailsContainer>
        <S.DetailSectionContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>Name</S.DetailItemLabel>
            <S.DetailItem>{user.name}</S.DetailItem>
          </S.DetailItemContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>Username</S.DetailItemLabel>
            <S.DetailItem>{user.username}</S.DetailItem>
          </S.DetailItemContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>E-mail</S.DetailItemLabel>
            <S.DetailItem>{user.email}</S.DetailItem>
          </S.DetailItemContainer>
        </S.DetailSectionContainer>

        <S.DetailSectionContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>Street</S.DetailItemLabel>
            <S.DetailItem>{user.address.street}</S.DetailItem>
          </S.DetailItemContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>Suite</S.DetailItemLabel>
            <S.DetailItem>{user.address.suite}</S.DetailItem>
          </S.DetailItemContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>City</S.DetailItemLabel>
            <S.DetailItem>{user.address.city}</S.DetailItem>
          </S.DetailItemContainer>
          <S.DetailItemContainer>
            <S.DetailItemLabel>Zipcode</S.DetailItemLabel>
            <S.DetailItem>{user.address.zipcode}</S.DetailItem>
          </S.DetailItemContainer>
        </S.DetailSectionContainer>

        <S.DetailSectionContainer>
        <S.DetailItemContainer>
            <S.DetailItemLabel>Company name</S.DetailItemLabel>
            <S.DetailItem>{user.company.name}</S.DetailItem>
          </S.DetailItemContainer>    
        <S.DetailItemContainer>
            <S.DetailItemLabel>Catch phrase</S.DetailItemLabel>
            <S.DetailItem>{user.company.catchPhrase}</S.DetailItem>
          </S.DetailItemContainer>
        </S.DetailSectionContainer>


      </S.DetailsContainer>
      <S.MapContainer>Map</S.MapContainer>
    </S.MainContainer>
  );
}
