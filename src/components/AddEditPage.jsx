import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Base from "./Base";
import Fields from "./Fields";
import Header from "./Header";
import Wave from "./Wave";

export default () => {
    let data;
    const { id } = useParams();

    if ( id ) {
        const movies = useSelector(state => state.movies.items);
        data = movies[id];
    }

    const handleSubmit = (event) => {
        
    }

    return (
        <Base>
            <div style={{height: '100vh', justifyContent: 'center', display: 'flex', flexDirection: 'column', rowGap: '3rem'}}>
                <Header label={`Create a new movie`}/>
                <Fields {...data} onSubmit={handleSubmit} />
            </div>
            <Wave float={false}/>
        </Base>
    );
}