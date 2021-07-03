import * as S from './Styles'
import { useLocation } from 'react-router-dom';

// components
import UserDetail from 'components/UserDetail/UserDetail'
import { UserInterface } from 'Types/User'




export default function UserDetailPage(): React.ReactElement {
    const location = useLocation();
    const {user}: any = location.state
    
    
    return (
        <UserDetail user={user}/>
    )
}
