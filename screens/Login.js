import React from "react";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from '../components/styles.js'

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/images/img1.jpg')}/>

                <PageTitle>Flower Crib</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;