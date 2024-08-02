import { styled } from "styled-components";

const MovieListWave = styled.div`
    overflow: hidden;
    width: 100vw;
    background-color: #093545;
    position: ${props => props.float === 'true' ? 'absolute' : undefined};
    bottom: ${props => props.float === 'true' ? 0 : undefined};

    &::before {
        content:'';
        pointer-events: none;
        background-repeat: no-repeat;
        bottom: -0.1vw;
        left: -0.1vw;
        right: -0.1vw;
        top: -0.1vw; 
        background-size: 100% 150px;
        background-position: 50% 0%; 
        transform: rotateY(180deg); background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23224957"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23224957"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23224957"/></svg>'); 
        transform: scaleX(-1) scaleY(-1);
        display: block;
        height: 10rem;

        @media screen and (min-width: 1200px) {
            background-size: 100% calc(2vw + 150px);
        }
    }
`

export default ({float = false}) => {
    return (
        <MovieListWave float={float ? 'true' : 'false'} />
    );
}