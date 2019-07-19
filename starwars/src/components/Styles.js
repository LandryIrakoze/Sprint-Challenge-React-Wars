import React from "react";
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    height: vh;
`

export const Card = styled.div`
    width: 100px;
    height: 250px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 5px;
    margin: 10px;

    background-color: brown;
`

export const ButtonContainer = styled.div`
    display: block;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;

export const Name = styled.p`
    color: white;
    font-size: 18px;
`
