import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import Fade from 'react-reveal/Fade';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [menuStatus , setMenuStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <Fade top>
            <a>
                <img src="images/logo.svg" alt="" height= "16px" width="125px"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setMenuStatus(true)}>Menu</CustomMenu>
            </RightMenu>
            </Fade>
            
                <MenuNav show={menuStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setMenuStatus(false)}/>
                    </CloseWrapper>
                    
                
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Energy</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#"><CustomLang /> Australia</a></li>
                </MenuNav>
            

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
    z-index: 1;
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
        padding: 8px 20px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1198px){
        display: none;
    }

    a:hover{
        background-color: #D3D3D3;
        border-radius: 100px;
        opacity: 0.6;
        transition: 0.3s ease-in;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-size: 15px;
        font-weight: 550;
        padding: 8px 20px;
        
        @media(max-width: 1198px){
        display: none;
        }
    }
    a:hover{
        background-color: #D3D3D3;
        border-radius: 100px;
        opacity: 0.8;
        transition: 0.5s ease-in-out;
    }
`

const CustomMenu = styled.div`
    font-size: 15px;
    font-weight: 550;
    padding: 8px 15px;
    cursor: pointer;
    /* @media(max-width: 1198px){

        width: 80px;
        border: 1px solid #D3D3D3;
        background-color: #D3D3D3;
        padding: 8px;
        border-radius: 100px;
        opacity: 0.45;
    } */
    :hover{
        background-color: #D3D3D3;
        border-radius: 100px;
        opacity: 0.8;
        transition: 0.5s ease-in-out;
    }
`
const MenuNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.7s ease-in-out;
    li{
        padding: 13px 5px;
        a{
            font-size: 15px;
            font-weight: 550;
        }   
    }
    li:hover{
        background-color: #D3D3D3;
        border-radius: 100px;
        opacity: 0.8;
        transition: 0.5s ease-in-out;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`


const CloseWrapper = styled.div`
    margin: 15px 5px 15px 0;
    display: flex;
    justify-content: flex-end;
`

const CustomLang = styled(LanguageIcon)``

const LastList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`