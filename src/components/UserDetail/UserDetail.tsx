import { UserInterface } from 'Types/User'
import * as S from './Styles'

interface Props {
    user: UserInterface
}

export default function UserDetail({user}: Props): React.ReactElement {



    return (
        <div>
            {user.name}
        </div>
    )
}
