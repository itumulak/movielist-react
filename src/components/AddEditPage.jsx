import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Base from "./Base";
import Fields from "./Fields";
import Header from "./Header";

export default () => {
    const isLogin = useSelector(state => state.auth.isLogin)
    const navigate = useNavigate()

    useEffect(() => {        
        if (!isLogin) {
            navigate('/login')
        }
    }, [])

    let data;
    const { id } = useParams();
    let movies = useSelector(state => state.movies.items);        

    if ( id ) {
        data = movies[id];
    }

    return (
        <Base>
            <Header label={!id ? `Create a new movie` : `Edit`}/>
            <Fields id={id} {...data}/>
        </Base>
    );
}