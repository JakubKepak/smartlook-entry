
// components
import PostDetail from "components/PostDetail/PostDetail"
import { PostInterface } from "Types/Post"

interface Props {
    post: PostInterface
}

export default function PostDetailPage({post}: Props): React.ReactElement {
    return (
       <PostDetail post={post}/>

    )
}
