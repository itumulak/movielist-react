import { styled } from "styled-components";

const Form = styled.form`
    max-width: 380px;
    width: 100%;
    z-index: 1;
`

export default ({children, onSubmit, ...props}) => {
    return (
        <Form className="flex gap-6 flex-col" onSubmit={onSubmit}>
            {children}
        </Form>
    );
}