import * as S from './Styles';

interface Props {
    title: string
}

export default function Header({title}: Props): React.ReactElement {
  return (
    <S.MainContainer>
      <S.Title>{title}</S.Title>
    </S.MainContainer>
  );
}
