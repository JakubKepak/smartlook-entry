import * as S from './Styles'
import { CommentInterface } from "Types/Comment";

interface Props {
    comment: CommentInterface
}

export default function CommentDetail({comment}: Props): React.ReactElement {

    

    return (
        <div>
            {comment.body}
        </div>
    )
}
