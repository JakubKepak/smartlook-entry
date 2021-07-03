import * as S from './Styles';
import { Link } from 'react-router-dom';

// components
import PostPreview from 'components/PostPreview/PostPreview';
import { PostInterface } from 'Types/Post';
import Header from 'components/Header/Header';

interface Props {
  posts: PostInterface[];
}

export default function PostsPage({ posts }: Props): React.ReactElement {
  return (
    <S.mainContainer>
      <Header title='All Posts'/>

      {posts &&
        posts.map((post: PostInterface) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <PostPreview  post={post} />
          </Link>
        ))}
    </S.mainContainer>
  );
}
