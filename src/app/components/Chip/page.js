'use client';

import styled from 'styled-components';

const Container = styled.div`
    background-color: #AAA67F;
    display: inline-block;
    border-radius: 10px;
    padding: 2px 8px;
    margin: 5px;

    p {
        font-size: 10px;
        font-weight: bold;
        line-height: 16px;
    }

`;

const Chip = () => {
    return (
        <Container>
            <p>Hello</p>
        </Container>
    );
};

export default Chip;
