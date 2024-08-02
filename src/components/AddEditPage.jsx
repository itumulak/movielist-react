import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Base from "./Base";
import Fields from "./Fields";
import Header from "./Header";
import Wave from "./Wave";

export default () => {
    let data;
    const { id } = useParams();
    let movies = useSelector(state => state.movies.items);        

    if ( id ) {
        data = movies[id];
    }

    return (
        <Base>
            <div style={{height: '100vh', justifyContent: 'center', display: 'flex', flexDirection: 'column', rowGap: '3rem'}}>
                <Header label={`Create a new movie`}/>
                <Fields id={id} {...data}/>
            </div>
            <Wave float={false}/>
        </Base>
    );
}