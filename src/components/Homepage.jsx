import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Base from "./Base";
import EmptyList from "./EmptyList";
import MovieList from "./MovieList";

export default () => {
    const movies = useSelector(state => state.movies.items)
    const isLogin = useSelector(state => state.auth.isLogin)
    const navigate = useNavigate()

    useEffect(() => {
        
        if (!isLogin) {
            navigate('/login')
        }
    }, [])

    return (
        <Base>
            {movies.length > 0 ? <MovieList list={movies}/> : <EmptyList/> }
        </Base>
    );
}