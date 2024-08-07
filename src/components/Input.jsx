import { styled } from "styled-components";

const StyledInput = styled.input`
    min-height: 2.813rem;
    background-color: #224957;
    width: 100%;
    color: white;

    &::placeholder {
        color: white;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export default ({type = 'text', placeholder = '', value = '', onChange}) => {
    return (
        <StyledInput onChange={onChange} required className="font-montserrat rounded px-4" type={type} placeholder={placeholder} defaultValue={value}/>
    );
}