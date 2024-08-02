import { styled } from "styled-components";

const Button = styled.button`
    border: ${props => props.primary === 'false' ? '1px solid white' : undefined};
    background-color: ${props => props.primary === 'true' ? '#2BD17E' : undefined};
    max-width: 380px;
    width: 100%;
`

export default ({label, isPrimary = false, ...props}) => {
    return (
        <Button primary={isPrimary ? 'true' : 'false'} className="rounded text-1xl font-semibold h-12 text-white" {...props}>{label}</Button>
    );
}