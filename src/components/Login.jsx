import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Base from './Base';
import Input from "./Input";
import Form from "./Form";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Wave from "./Wave";

const Login = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 300px;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
` 

export default () => {
    const navigate = useNavigate();

    const navigateMovieList = () => {
        navigate('/');
    }

    return (
        <Base>
            <Login className="flex flex-col gap-8">
                <h1 className="font-montserrat font-semibold text-6xl text-white text-center">Sign In</h1>
                <Form>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Checkbox label="Remember me"/>
                    <Button onClick={navigateMovieList} isPrimary={true} label="Log in"/>
                </Form>            
            </Login>
            <Wave float={true}/>
        </Base>
    );
}