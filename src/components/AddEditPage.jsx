import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Base from "./Base";
import Fields from "./Fields";
import Header from "./Header";

export default () => {
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