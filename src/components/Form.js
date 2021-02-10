import React, { useState } from 'react';
import { ingredientArray } from '../utility/arrays';
import Ingredients from './Ingredients';
import Units from './Units';
import styled from 'styled-components';

const ConvertForm = () => {
    const initialConversion = {
        quantity: '',
        units: 1,
        ingredients: 0,
    };
    const [conversion, setConversion] = useState(initialConversion);
    const [display, setDisplay] = useState('0');
    let { units, quantity, ingredients } = conversion;

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(
            (quantity * units * ingredientArray[ingredients][1]).toFixed(0)
        );
    };

    const handleChange = (e) => {
        setConversion({ ...conversion, [e.target.name]: e.target.value });
        setDisplay('0');
    };

    return (
        <MainDisplay>
            <h1>Volume to Weight Converter</h1>

            <SelectContainer onSubmit={handleSubmit}>
                <HowMuch>
                    <input
                        type="number"
                        name="quantity"
                        value={quantity}
                        min="0"
                        step=".01"
                        placeholder="0"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <select name="units" value={units} onChange={handleChange}>
                        <Units />
                    </select>
                </HowMuch>
                <h2>of</h2>
                <select
                    name="ingredients"
                    value={ingredients}
                    onChange={handleChange}>
                    <Ingredients />
                </select>
                <button type="submit">Submit</button>

                <h2>{display} grams</h2>
                <button
                    type="clear"
                    onClick={() => {
                        setConversion(initialConversion);
                        setDisplay('0');
                    }}>
                    Clear
                </button>
            </SelectContainer>
        </MainDisplay>
    );
};

export default ConvertForm;

const MainDisplay = styled.div`
    display: flex;
    background: #b599ff;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    h1 {
        max-width: 300px;
    }
`;

const SelectContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;

    border: 4px #fff473 solid;
    border-radius: 8px;
    padding: 20px;
    background: AquaMarine;

    select {
        width: 70%;
    }

    button {
        margin-top: 10px;
        background: #ff8466;
        font-size: 1.3rem;
        font-weight: 600;
        box-shadow: none;
        border-color: green;
        width: 50%;
    }
    h2 {
        margin: 4px 0;
    }
`;
const HowMuch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    input {
        width: 75px;
        margin-right: 10px;
    }
`;
