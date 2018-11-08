import React from 'react'
import styled from 'styled-components'
import Colors from '../assets/colors'
import {Text, BoxTitle, BoxGreyNumber} from '../assets/primitives'

export default function Box({number, headline, text}) {
    return (
    <BoxStyle>
        <BoxGreyNumber>1</BoxGreyNumber>
        <BoxTitle>Analyse</BoxTitle>
        <Text style={{textAlign: 'center', fontSize: 16}}>Die BRIVE App liest die Sensoren im Smartphone aus und bereitet ihre Daten auf.</Text>
    </BoxStyle>);
}

const BoxStyle = styled.div`
  background-color: ${Colors.boxBackgroundColor};
  border-radius: 5px;
  padding: 1rem;
`

