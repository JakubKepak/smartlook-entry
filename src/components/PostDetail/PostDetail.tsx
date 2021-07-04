import * as S from './Styles';
import { PostInterface } from 'Types/Post';
import { UserInterface } from 'Types/User';
import { Link } from 'react-router-dom';

interface Props {
  post: PostInterface;
  user: UserInterface;
}

export default function PostDetail({ post, user }: Props): React.ReactElement {
  return (
    <S.PostContainer>
      <S.InnerContainer>
        <S.Title>{post.title}</S.Title>
        <S.Body>{post.body}</S.Body>

        <S.FooterContainer>

            <S.Author>
                author:
            </S.Author>

          {user && (
            <Link
              to={{
                pathname: `/user/${user.id}`,
                state: { user },
              }}
            >
              {user.name}
            </Link>
          )}
        </S.FooterContainer>
      </S.InnerContainer>
    </S.PostContainer>
  );
}
