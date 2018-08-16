import React from 'react'
import styled from 'styled-components'
import Img from '../images/MyGuy_Background.jpg'


export const Main = styled.div`
  height: 1500px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  color: white !important;
  font-family: Verdana, Geneva, sans-serif !important;
`

export const AboutUsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 60px;
  padding-right: 200px;
`