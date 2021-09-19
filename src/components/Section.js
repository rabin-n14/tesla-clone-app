import React from 'react'
import styled from 'styled-components'

function Section(props) {
    return (
        <Wrap bgImage = {props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {   props.rightBtnText &&
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 5px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    @media (max-width: 768px){
        width: 100vh;
    }
    @media (max-width: 740px){
        width: 95vh;
    }
    @media (max-width: 720px){
        width: 85vh;
    }
    @media (max-width: 690px){
        width: 75vh;
    }
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled.div`
    background-color: white;
    height: 40px;
    width: 256px;
    width: 256px;
    @media (max-width: 768px){
        width: 100vh;
    }
    @media (max-width: 740px){
        width: 95vh;
    }
    @media (max-width: 720px){
        width: 85vh;
    }
    @media (max-width: 690px){
        width: 75vh;
    }
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.65;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 2s;
    overflow-x: hidden;
`

const Buttons = styled.div`

`