import Base from "./Base";
import Fields from "./Fields";
import Header from "./Header";
import Wave from "./Wave";

export default () => {
    return (
        <Base>
            <div style={{height: '100vh', justifyContent: 'center', display: 'flex', flexDirection: 'column', rowGap: '3rem'}}>
                <Header label={`Edit`}/>
                <Fields/>
            </div>
            <Wave float={false}/>
        </Base>
    );
}