import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from '../../services/api';
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido.').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No mínimo 3 caracteres!').required('Campo obrigatório!'),
}).required();

const Login = () => {

        const navigate = useNavigate();

        const { control, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
        });

const style = {color: "#8647AD"};

        console.group(errors);

        const onSubmit = async formData => {
            try {
                const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
                if(data.length === 1) {
                    navigate('/feed')
                } else {
                    alert('Email ou senha inválido')
                }
            } catch {
                alert('Houve um erro, tente novamente.')
            }
        }



    return (<>
    <Header/>
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu Login</TitleLogin>
                <SubtitleLogin>Faça seu login e para acessar o seu progresso._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail style={style} />} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock style={style} />} />
                    <Button title="Entrar" variant="secondary"  type="submit" />
                </form>
                <Row>
                    <EsqueciText><a href="/forgotpassword">Esqueci minha senha!</a></EsqueciText>
                    <CriarText><a href="/signup">Crie sua conta!</a></CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    </>)
}

export { Login }