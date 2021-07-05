import * as S from './Styles';
import { Link } from 'react-router-dom';
import { useQueryClient, useQuery } from 'react-query';

// components
import PostPreview from 'components/PostPreview/PostPreview';
import { PostInterface } from 'Types/Post';
import Header from 'components/Header/Header';
import Loader from 'components/UI/Loader';

export default function PostsPage(): React.ReactElement {
  const { isLoading, error, data } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
  );

  return (
    <S.mainContainer>
      <Header title='All Posts' />

      {isLoading && <Loader />}

      {!isLoading &&
        data &&
        data.map((post: PostInterface) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <PostPreview post={post} />
          </Link>
        ))}
    </S.mainContainer>
  );
}
