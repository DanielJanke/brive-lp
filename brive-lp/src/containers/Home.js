import React from 'react'
import { withSiteData } from 'react-static'
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components'

import logoImg from '../assets/img/brive_logo.png'
import Colors from '../assets/colors'

import {Title1, Title2, Text} from '../assets/primitives'

import PrimaryButton from '../view/button'
import Box from '../view/box'

export default withSiteData(() => (
    <React.Fragment>
        <SectionLight>
            <Container>
                <Row>
                    <Col style={{textAlign: 'center'}} xs={6} sm={6} lg={2}><img className='margin-bottom-3' src={logoImg} /></Col>
                </Row>
                <Row style={{height: 440}} align="center">
                    <Col sm={12} lg={5}>

                        <Title1 className={'margin-bottom-1'}>BRIVE hilft Fahrzeugflotten mit Telematik im Smartphone effizenter zu machen. Von Anfang bis Ende.</Title1>
                        <PrimaryButton />
                    </Col>
                </Row>

            </Container>
        </SectionLight>
        <SectionBlue>
            <Container>
                <Row>
                    <Col xs={12} sm={5} >
                        <Title2>Den größten Anteil von Flottenkosten haben ihre Fahrer</Title2>
                        <Text>Umso wichtiger sind deshalb motivierte Mitarbeiter, die mit Ihrer Fahrweise Rücksicht auf die Fahrzeuge, die laufenden Kosten und die Umwelt nehmen. BRIVE hilft dabei Mitarbeiter zu nachhaltig zu trainieren und motivieren um die Kosten von Flotte signifikant zu senken.</Text>
                    </Col>
                </Row>
            </Container>
        </SectionBlue>
        <Section>
            <Container>
                <Row>
                    <Col xs={12} sm={5} >
                        <Title2>Wie BRIVE Fahrzeugflotten effizenter macht</Title2>
                        <Text>BRIVE besteht aus mehreren Kompontenten: Der Analyse, der Bewertung und der anschließenden Belohnung der Fahrer.</Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={3}>
                        <Box></Box>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Box></Box>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Box></Box>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Box></Box>
                    </Col>
                </Row>
            </Container>
        </Section>
    </React.Fragment>
))


const Section = styled.div`
  padding: 4rem 0;
  width: 100vw;
  //height: 100vh;
  background-image: linear-gradient(-135deg, #90A900 0%, #00B8A3 100%);
`

const SectionBlue = styled(Section)`
  background-image: linear-gradient(-180deg, #F5FAF7 0%, #D3F1EF 100%);
`

const SectionLight = styled(Section)`
  background-image: linear-gradient(-135deg, rgba(144,169,0,0.32) 0%, rgba(0,184,163,0.32) 100%);
`



