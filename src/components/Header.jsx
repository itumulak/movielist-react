import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Header = styled.div`
    max-width: 380px;
    width: 100%;
    padding-top: 4rem;

    @media screen and (min-width: 768px) {
        max-width: unset;
        padding-top: 0;
    }
`

const Title = styled.div`
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;

    svg {
        font-size: 24px;
    }
`

const Logout = styled.button`
    #logout-label {
        display: none;
    }

    svg {
        font-size: 24px;
    }

    @media screen and (min-width: 768px) {
        #logout-label {
            display: block;
        }
    }
`

export default ({label, showAdd = false, showLogout = false, ...props}) => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const navigateAdd = () => {
        navigate('/add');
    }

    return (
        <Header className="flex justify-between font-montserrat font-semibold text-white text-center">
            <Title className="flex gap-4">
                <div>{label}</div>
                {showAdd && <button onClick={navigateAdd}><AddCircleOutlineIcon/></button>}
            </Title>
            {showLogout && <Logout className="flex flex-row items-center gap-x-4" onClick={navigateLogin}><span id="logout-label">Logout</span> <LogoutIcon/></Logout>}
        </Header>
    );
}