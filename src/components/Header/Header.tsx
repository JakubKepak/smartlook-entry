import * as S from './Styles';

interface Props {
    title: string
    children?: React.ReactElement
}

export default function Header({title, children}: Props): React.ReactElement {
  return (
    <S.MainContainer>
      <S.Title>{title}</S.Title>
      {children}
    </S.MainContainer>
  );
}
