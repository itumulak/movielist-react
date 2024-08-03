import { styled } from "styled-components";

const Form = styled.form`
    max-width: 380px;
    width: 100%;
    z-index: 1;
    display: grid;
    grid-template-areas: 
        "title"
        "year"
        "image"
        "actions";
    
    
    .title-area {
        grid-area: title;
    }

    .year-area {
        grid-area: year;
    }

    .image-area {
        grid-area: image;
    }

    .actions-area {
        grid-area: actions;
    }

    @media screen and (min-width: 768px) {
        grid-column-gap: 6em;
        grid-template-rows: 45px 45px;
        max-width: unset;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: 
            "image title"
            "image year"
            "image actions";
        
    }
`

export default ({children, onSubmit, ...props}) => {
    return (
        <Form className="flex gap-6 flex-col" onSubmit={onSubmit}>
            {children}
        </Form>
    );
}