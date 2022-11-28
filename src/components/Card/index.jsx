import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'; 

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://camo.githubusercontent.com/aa22ed75fc9b6d35bffba5d45840bf250efc336c1ad0138c2343ffeca8e5888e/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f657536366c5150514976454e71514b3361702f67697068792e6769663f6369643d373930623736313163316436303566643161343635633462393366353366386462616162366432373963656237316131267269643d67697068792e6769662663743d67" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/101261636?v=4" />
                <div>
                    <h4>Valdoci Junior</h4>
                    <p>Há uma hora</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto usando HTML, CSS e JavaScript.</h4>
                <p>Projeto pessoal feito para treinar skills de HTML, CSS e JavaScript... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 58
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };