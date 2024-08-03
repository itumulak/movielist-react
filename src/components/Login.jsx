import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import Base from './Base';
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

const Login = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 300px;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    margin: auto;
` 

export default () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const navigateMovieList = (event) => {
        event.preventDefault();
        dispatch(login())
        navigate('/');
    }

    return (
        <Base>
            <Login className="flex flex-col gap-8">
                <h1 className="font-montserrat font-semibold text-6xl text-white text-center">Sign In</h1>
                <form onSubmit={navigateMovieList} className="flex flex-col gap-8">
                    <Input required type="email" placeholder="Email"/>
                    <Input required type="password" placeholder="Password"/>
                    <Checkbox label="Remember me"/>
                    <Button isPrimary={true} label="Log in"/>
                </form>            
            </Login>
        </Base>
    );
}