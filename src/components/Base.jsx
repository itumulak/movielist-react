import { styled } from "styled-components";
import { Provider } from "react-redux";
import Wave from "./Wave";
// import { moviesProvider as MoviesProvider } from "../store/MoviesCtx";

const Base = styled.div`
    background-color: #093545;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InnerBase = styled.div`
    max-width: 380px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 3rem;
`

export default ({children, ...props}) => {
    return (
        <Base className="flex flex-col gap-14" {...props}>
            <InnerBase>
                {children}       
            </InnerBase>
            <Wave float={false}/>
        </Base>
    );
}
     