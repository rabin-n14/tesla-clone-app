import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title = "Model 3"
                description = "Electric vehicle incentives are now available on eligible Model 3 in ACT, NSW, TAS and VIC."
                backgroundImg = "model-3.jpg"
                leftBtnText = "Existing Inventory"
                rightBtnText = "Custom Order"
            /> 
            <Section 
                title = "Solar and Powerwall"
                description = "Power Everything"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Learn More"
            /> 
            <Section 
                title = "Model Y"
                description = ""
                backgroundImg = "model-y.jpg"
                leftBtnText = "Learn More"
                rightBtnText = "Stay Updated"
            /> 
            <Section 
                title = "Model S"
                description = "Schedule a Touchless Test Drive"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            /> 
            <Section 
                title = "Model X"
                description = "Schedule a Touchless Test Drive"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            /> 
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`