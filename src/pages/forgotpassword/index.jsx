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
import {Column, Container, CriarText, EsqueciText, SubtitleLogin, TitleLogin, Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido.').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No mínimo 3 caracteres!').required('Campo obrigatório!'),
}).required();

const ForgotPassword = () => {

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
            <Wrapper>
                <TitleLogin>Recuperação de senha.</TitleLogin>
                <SubtitleLogin>Insira seu e-mail cadastrado na plataforma DIO._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail style={style} />} />
                    <Button title="Enviar código" variant="secondary"  type="submit" />
                    <EsqueciText>Um e-mail chegará em até 60 segundos.</EsqueciText>
                    <CriarText>(Verifique caixa de spam)</CriarText>
                </form>
            </Wrapper>
        </Column>
    </Container>
    </>)
}

export { ForgotPassword }