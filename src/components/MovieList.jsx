import { styled } from "styled-components";
import MovieItem from "./MovieItem";
import Header from "./Header";

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 380px;
    width: 100%;
    gap: 2rem;
    z-index: 999;

    @media screen and (min-width: 768px) {
        max-width: unset;
        grid-template-columns: repeat(4, 1fr);
    }
`

export default ({list, showAdd = false, showLogout = false, ...props}) => {
    return (
        <>
            <Header label={`My movies`} showAdd={true} showLogout={true}/>
            <List>
                {list.map((item, index) => <MovieItem key={index} id={index} title={item.title} year={item.year} poster={item.poster} />)}
            </List>
        </>
    );
}
  