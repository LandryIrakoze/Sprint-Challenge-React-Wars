import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container ,ButtonContainer, Button } from './Styles';

function Data() {
    const [characters, setCharacters] = useState([]);
    // const [url, setUrl] = useState('https://swapi.co/api/people/');
    const [url, setUrl] = useState('https://henry-mock-swapi.herokuapp.com/api');
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');

    useEffect(() => {
        axios.get(`${url}`)
            .then(response => {
                console.log('response', response)
                const data = response.data.results;
                const nextUrl = response.data.next;
                const previousUrl = response.data.previous;

                setCharacters(data);
                setNext(nextUrl);
                setPrevious(previousUrl);
            })
            .catch(response => {
                console.log('its broken, try again', response)
            })
    },[url]);  

    console.log('data', characters);
    console.log('next', next);
    console.log('previous', previous);

    function getCharacter(page) {
        if(page) {
            setUrl(page);
        }
    }

    return (
        <>
        <ButtonContainer>
            {
                next
                ? <Button id="next" onClick={() => getCharacter(next)} >Next</Button>
                : <></>
            }
            {
                previous
                ? <Button id="previous" onClick={() => getCharacter(previous)} >previous</Button>
                : <></>
            }
        </ButtonContainer>
        <Container>
            {
                characters.map(item => {
                    return <CharacterCard key={item.name} info={item}/>
                })
            }
        </Container>
        </>
    )
}


export default Data;