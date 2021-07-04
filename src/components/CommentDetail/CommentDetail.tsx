import * as S from './Styles';
import { CommentInterface } from 'Types/Comment';

interface Props {
  comment: CommentInterface;
}

export default function CommentDetail({ comment }: Props): React.ReactElement {
  return (
    <S.CommentContainer>
      <S.Name>{comment.name}</S.Name>
      <S.Body>{comment.body}</S.Body>
      <S.CommentFooter>{comment.email}</S.CommentFooter>
    </S.CommentContainer>
  );
}
