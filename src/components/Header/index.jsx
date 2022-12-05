import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { SignUp } from "../../pages/signup";
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {

        const navigate = useNavigate();

        const handleClickSignIn = () => {
        navigate('/')
    }

        const navigateSignup = useNavigate();

        const handleClickSignup = () => {
            navigate('/signup')
        }

        const handleClickLogin = () => {
            navigate('/login')
        }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" onClick={handleClickSignIn} />
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code </Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/101261636?v=4" />
                    ) : (
                        <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickLogin} />
                    <Button title="Cadastrar" onClick={handleClickSignup}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }