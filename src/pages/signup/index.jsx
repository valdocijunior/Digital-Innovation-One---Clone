import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { api } from '../../services/api';
import {AnchorStyle, Column, Container, CreateAccountText, Row, SubtitleCreateAccount, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { IconContext } from 'react-icons';

const schema = yup.object({
    email: yup.string().email('email não é válido.').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No mínimo 3 caracteres!').required('Campo obrigatório!'),
}).required();

const style = {color: "#8647AD"};

const SignUp = () => {

        const navigate = useNavigate();

        const { control, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
        });

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
                <TitleLogin>Comece agora gratuitamente!</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="text" control={control} placeholder="Nome completo" leftIcon={<MdPerson style={style} />} />
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail style={style} />} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock style={style} />} />
                    <Button title="Entrar" variant="secondary"  type="submit" />
                </form>
                <CreateAccountText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CreateAccountText>
                <SubtitleCreateAccount>Já tenho conta. <AnchorStyle> <a href='/login'>Fazer login.</a></AnchorStyle></SubtitleCreateAccount>
            </Wrapper>
        </Column>
    </Container>
    </>)
}

export { SignUp }