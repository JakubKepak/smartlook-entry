import { useState, useEffect } from 'react';
import * as S from './Styles';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

// components
import PostPreview from 'components/PostPreview/PostPreview';
import { PostInterface } from 'Types/Post';
import Header from 'components/Header/Header';
import Loader from 'components/UI/Loader';
import GeneralError from 'components/GeneralError/GeneralError';
import SearchField from 'components/UI/SearchField';
import NoResults from 'components/NoResults/NoResults';

export default function PostsPage(): React.ReactElement {
  const { isLoading, error, data } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
  );

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setFilteredPosts([
        ...data.filter((post: PostInterface) =>
          post.title.toLocaleLowerCase().includes(searchKeyword)
        ),
      ]);
    }
  }, [searchKeyword, data]);

  return (
    <S.mainContainer>
      {error && <GeneralError />}

      {!error && (
        <>
          <Header title='All Posts'>
            <SearchField onChange={(e:any) => setSearchKeyword(e.target.value)}/>
          </Header>

          {isLoading && <Loader />}

          {filteredPosts.length === 0 && <NoResults />}

          {!isLoading &&
            data &&
            filteredPosts.length > 0 &&
            filteredPosts.map((post: PostInterface) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <PostPreview post={post} />
              </Link>
            ))}
        </>
      )}
    </S.mainContainer>
  );
}
