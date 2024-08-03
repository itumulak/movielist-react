import { styled } from "styled-components";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Wave from "./Wave";

const Base = styled.div`
    background-color: #093545;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        padding-left: 8rem;
        padding-right: 8rem;
    }
`;

const InnerBase = styled.div`
    max-width: 380px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 3rem;

    @media screen and (min-width: 768px) {
        max-width: 1200px;
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
`

export default ({children, ...props}) => {
    return (
        <Base className={`flex flex-col gap-14`} {...props}>
            <InnerBase>
                {children}       
            </InnerBase>
            {createPortal(<Wave/>, document.getElementById('wave'))}
        </Base>
    );
}
     