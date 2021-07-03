import * as S from './Styles';
import { PostInterface } from 'Types/Post';
import { truncate } from 'utils/utils';

interface Props {
  post: PostInterface;
}

export default function PostPreview({ post }: Props): React.ReactElement {
  return (
    <S.MainContainer>
      <S.InnerContainer>
        <S.Title>{post.title}</S.Title>
        <S.Body>{truncate(post.body)}</S.Body>
      </S.InnerContainer>
    </S.MainContainer>
  );
}
