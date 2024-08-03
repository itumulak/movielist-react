// import { useMovies } from "../store/MoviesCtx";
import { useSelector } from "react-redux";
import Base from "./Base";
import EmptyList from "./EmptyList";
import MovieList from "./MovieList";

export default () => {
    const movies = useSelector(state => state.movies.items)

    return (
        <Base>
            {movies.length > 0 ? <MovieList list={movies}/> : <EmptyList/> }
        </Base>
    );
}