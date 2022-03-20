import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

interface LoginPageProps {
    title: string;
    label: string;
    usernamePlaceholder: string;
    passwordPlaceholder: string;
};

const Container = styled.div`
    height: 100vh;
    background-color: #F2F7FF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled.div`
    height: 55%;
    width: 25%;
    background-color: #FFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 1024px) {
        height: 60%;
        width: 60%;
    }
    @media screen and (max-width: 720px) {
        height: 100%;
        width: 100%;
    }
`;

const TitleContainer = styled.div`
    height: 75px;
    padding: 0px 13.5%;
    display: flex;
    align-items: center;
    margin: 60px 0px 15px;
`;

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    color: #25396F;
`;

const TextFieldContainer = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledTextField = styled(TextField)`
    &.MuiTextField-root {
        width: 74%;
        outline: none;
    }
`;

const ButtonContainer = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

const StyledButton = styled(Button)`
    &.MuiButton-root {
        width: 74%;
    }
`;

type Props = LoginPageProps

const LoginPage: FunctionComponent<Props> = (props: Props) => {

    // This router hook will navigate based on path
    const redirect = useNavigate();

    // This props is passing data from parent component
    const { title, label, usernamePlaceholder, passwordPlaceholder } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "" && password === "") {
            alert("Username and Password are required.");
            return;
        } else if (username !== "Admin" || password !== "admin1234") {
            alert("Invalid Username or Password");
            return;
        }
        redirectToMain();
    };

    // This will handle the login button to redirect to MainPage
    const redirectToMain = () => {
        setTimeout(() => {
            redirect('/main');
        }, 1000);
    };

    return (
        <>
            <Container>
                <LoginContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                    </TitleContainer>
                    <TextFieldContainer>
                        <StyledTextField 
                            type="text" 
                            placeholder={usernamePlaceholder}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            value={username} 
                        />
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <StyledTextField 
                            type="password" 
                            placeholder={passwordPlaceholder}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            value={password} 
                        />
                    </TextFieldContainer>
                    <ButtonContainer>
                        <StyledButton onClick={handleLogin}>{label}</StyledButton>
                    </ButtonContainer>
                </LoginContainer>
            </Container>
        </>
    );    
};

export default LoginPage;
