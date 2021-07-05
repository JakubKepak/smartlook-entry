import styled from '@emotion/styled'

const InputField = styled.input`
font-family: inherit;
padding: .2rem;
border-radius: ${({theme}) => theme.borderRadius};
`

interface Props {
    onChange: any
}

export default function SearchField({onChange}: Props): React.ReactElement {
    return (
        <InputField placeholder='Search...' onChange={onChange}/>
    )
}
