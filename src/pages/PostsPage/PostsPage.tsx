import * as S from './Styles';

// components
import PostPreview from 'components/PostPreview/PostPreview';
import { PostInterface } from 'Types/Post';
import Header from 'components/Header/Header'


interface Props {
  posts: PostInterface[];
}

export default function PostsPage({ posts }: Props): React.ReactElement {
  return (
    
      <S.mainContainer>
          <Header />

        {posts &&
          posts.map((post: PostInterface) => (
            <PostPreview key={post.id} post={post} />
          ))}
      </S.mainContainer>
   
  );
}
