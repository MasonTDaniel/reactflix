import React, { Component } from 'react'
import styled from 'styled-components'
import logo from 'https://fontmeme.com/permalink/191224/4e672c3cea7f136c9ed2b6a93a68c4c0.png'
import LoginForm from '../components/login/LoginForm'
import LoginFooter from '../components/login/LoginFooter'
import { generateMedia } from 'styled-media-query'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Link to="/">
                        <Logo src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <LoginForm />
                <LoginFooter />
            </div>
        )
    }
}

export default Login;

// Media 
const customMedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
})

// Logo
const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan('tablet')`
            top: 45%;
            left: 23%;
    `}
`;
