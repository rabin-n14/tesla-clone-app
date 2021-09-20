import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="images/logo.svg" alt="" height= "16px" width="125px"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Cybertruck</a>
                <a href="#">Powerwall</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu>Menu</CustomMenu>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    a{
        padding: 0 20px;
        cursor: pointer;
    }
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 60px;

    a{
        font-size: 15px;
        font-weight: 600;
        padding: 0 15px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1198px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-size: 15px;
        font-weight: 550;
        padding: 0 15px;
        
        @media(max-width: 1198px){
        display: none;
        }
    }
`
const CustomMenu = styled.div`
    font-size: 15px;
    font-weight: 550;
    padding: 0 15px;
    cursor: pointer;
`