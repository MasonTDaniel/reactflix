import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { Icon } from 'react-icons-kit'
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/'
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/'

class Footer extends Component {
    state = {
        langContent: false
    }

    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{
                    marginLeft: '10%'
                }}>Questions? <Link>Call 1-800-999-9999</Link></span>
                < div className="footer-columns" >
                    <ul>
                        <li>
                            <Link to="/">Gift Card Terms</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">Terms of Use</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">Privacy Statement</Link>
                        </li>
                    </ul>
                </div >
                {/* Language Button */}
                <div className="lang-btn" onClick={this.handleToggle}>
                    <Icon icon={iosWorld} size={20} />
                    &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                </div>

                {/* Toggle Language Content */}
                {
                    this.state.langContent && (
                        <div className="lang-toggle">
                            <ul>
                                <li>English</li>
                            </ul>
                            <ul>
                                <li>Spanish</li>
                            </ul>
                        </div>
                    )
                }
            </FooterContainer >
        )
    }
}

export default Footer;

// Media

const customMedia = generateMedia({
    tablet: `740px`,
    smDesktop: '900px'
});

// Main Footer Container
const FooterContainer = styled.footer`
    justify-content: center;
    background: rgba(0,0,0,0.8);
    margin-top: 6rem;
    padding-top: 3rem;
    padding-bottom: 6rem;
    position: relative;
    color: #999;
    z-index: 5;

    .footer-columns {
        width: 80%;
        margin: 1rem auto 0;
        color: #999;
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        ${customMedia.lessThan('tablet')`
            grid-template-columns: repeat(2, 1fr);
        `}
        ${customMedia.lessThan('smDesktop')`
            grid-template-columns: repeat(2, 1fr);
        `}
    }
    
    ul li {
        list-style: none;
        line-height: 2.5;
    }
    
    a {
        color: #999;
        font-size: 0.9rem;
    }
    
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    p {
        text-decoration: underline;
        cursor: pointer;
    }

    // Language Button
    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        color: #999;
        margin-left: 10%;
        margin-top: 2rem;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        cursor: pointer;
    }

    // Toggle Language Content
    .lang-toggle {
        margin-left: 10%;
        position: absolute;
    }

    .lang-toggle ul {
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        text-align: center;
        margin-bottom: -1rem;
        &:hover {
            background: #0085ff; 
            color: #fff;
        } 
    }
`;