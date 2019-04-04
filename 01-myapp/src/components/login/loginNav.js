import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 2rem 0 2rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 3px solid black;
    background: white;
`;

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    text-decoration: none;
    padding-right: 10rem;
`;

const LoginNav = (props) => {
    return ( 
        <div>
            <Nav>
                <StyledLink to="/" > Home </StyledLink>
                <StyledLink to="/login" > Log In </StyledLink>
                <StyledLink to="/register" >  Register </StyledLink>
            </Nav>
        </div>
     );
}

export default LoginNav;