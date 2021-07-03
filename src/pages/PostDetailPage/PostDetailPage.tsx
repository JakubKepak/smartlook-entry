import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as S from './Styles';

// components
import PostDetail from 'components/PostDetail/PostDetail';
import CommentDetail from 'components/CommentDetail/CommentDetail';
import { CommentInterface } from 'Types/Comment';

export default function PostDetailPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();

  const {
    isLoading: postIsLoading,
    error: postError,
    data: postData,
  } = useQuery('post', () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    )
  );

  const {
    isLoading: commentsIsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery('comments', () =>
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
      (res) => res.json()
    )
  );

  const {
    isIdle,
    isLoading: usersIsLoading,
    error: userError,
    data: userData,
  } = useQuery('user', () =>
    fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`).then(
      (res) => res.json()
    ),{
        enabled: !!postData?.userId
    }
  );

  return (
    <S.MainContainer>
      {postData && <PostDetail post={postData} user={userData}/>}

      <S.CommentsContainer>
        {commentsData &&
          commentsData.map((comment: CommentInterface) => (
            <CommentDetail key={comment.id} comment={comment} />
          ))}
      </S.CommentsContainer>
    </S.MainContainer>
  );
}
