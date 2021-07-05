import styled from '@emotion/styled'
import { useHistory } from 'react-router'

const GoBackMessage = styled.span`
    font-weight: ${({theme}) => theme.fontWeight.extraBold};

    &:hover {
        cursor: pointer;
    }
`

export default function GoBack(): React.ReactElement {
    const history = useHistory()

    const onClickHandler = () => {
        history.push("/")
    }

    return (
        <GoBackMessage onClick={onClickHandler}>
           Go Back
        </GoBackMessage>
    )
}
