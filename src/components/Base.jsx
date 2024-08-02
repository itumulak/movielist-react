import { styled } from "styled-components";
import { Provider } from "react-redux";
// import { moviesProvider as MoviesProvider } from "../store/MoviesCtx";

const Base = styled.div`
    background-color: #093545;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ({children, ...props}) => {
    return (
        <Base className="flex flex-col gap-14" {...props}>
            {children}       
        </Base>
    );
}
     