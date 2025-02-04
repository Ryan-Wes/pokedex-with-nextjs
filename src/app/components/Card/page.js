'use client'

import styled from "styled-components";
import MockImage from '../../../../public/pokemon.svg';
import Image from 'next/image';
import Chip from "../Chip/page";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 16px 16px 16px;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
    width: 230px;
    height: 230px;
    border-radius: 8px;
    margin: 5px;
    position: relative;

    span {
        position: absolute;
        background-color: #efefef;
        height: 100px;
        width: 230px;
        bottom: 0px;
        left: 0px;
        border-radius: 8px;
        z-index: -1;
    }

    p {
        align-self: flex-end;
        font-size: 10px;
    }

    img {
        align-self: center;
    }

    h6 {
        align-self: center;
        font-size: 16px;
    }

`;

const ChipContainer = styled.div `
    display: flex;
    justify-content: center;
`

const Card = () => {
    return (
        <Container>
            <p>#22</p>
            <Image src={MockImage} alt="imagem de um pokemon" width="140" height="140" />
            <ChipContainer>
                <Chip/>
                <Chip/>
            </ChipContainer>
            <span/>
            <h6>Pikachu</h6>
        </Container>
    )
}

export default Card;