import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    background-color: #092C39;
    padding-bottom: 1rem;
`

const Title = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
`

const Year = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
`

export default ({id, title, year, poster}) => {
    return (
        <Link to={`edit/${id}`}>
            <Box key={id}>
                <img src={poster}/>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </Box>
        </Link>
    );
}