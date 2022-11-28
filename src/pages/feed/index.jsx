import { Link } from 'react-router-dom';

import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button"
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from "../../components/Header"

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={85} nome="Valdoci Junior" image="https://avatars.githubusercontent.com/u/101261636?v=4"/>
            <UserInfo percentual={72} nome="Valdoci Junior" image="https://avatars.githubusercontent.com/u/101261636?v=4"/>
            <UserInfo percentual={65} nome="Valdoci Junior" image="https://avatars.githubusercontent.com/u/101261636?v=4"/>
            <UserInfo percentual={44} nome="Valdoci Junior" image="https://avatars.githubusercontent.com/u/101261636?v=4"/>
            <UserInfo percentual={32} nome="Valdoci Junior" image="https://avatars.githubusercontent.com/u/101261636?v=4"/>
        </Column>
    </Container>
    </>)
}

export { Feed }