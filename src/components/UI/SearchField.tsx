import styled from '@emotion/styled'

const InputField = styled.input``

interface Props {
    onChange: any
}

export default function SearchField({onChange}: Props): React.ReactElement {
    return (
        <InputField onChange={onChange}/>
    )
}
