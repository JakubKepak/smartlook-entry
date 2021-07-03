import * as S from './Styles';
import { PostInterface } from 'Types/Post';

interface Props {
  post: PostInterface;
}

export default function PostDetail({ post }: Props): React.ReactElement {
  return (
    <S.PostContainer>
      <S.InnerContainer>
        <S.Title>{post.title}</S.Title>
      </S.InnerContainer>
    </S.PostContainer>
  );
}
