import React, { useState } from "react";
import { ingredientArray } from "../utility/arrays";
import Ingredients from "./Ingredients";
import Units from "./Units";
import styled from "styled-components";

const ConvertForm = () => {
  const initialConversion = {
    quantity: "",
    units: 1,
    ingredients: 0,
  };
  const [conversion, setConversion] = useState(initialConversion);
  const [display, setDisplay] = useState("0");
  let { units, quantity, ingredients } = conversion;

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay((quantity * units * ingredientArray[ingredients][1]).toFixed(0));
  };

  const handleChange = (e) => {
    setConversion({ ...conversion, [e.target.name]: e.target.value });
    setDisplay("0");
  };

  return (
    <MainDisplay>
      <h1>Volume to Grams</h1>

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
        <select name="ingredients" value={ingredients} onChange={handleChange}>
          <Ingredients />
        </select>
        <button type="submit">Weigh It</button>

        <h2>{display} grams</h2>
        <button
          type="clear"
          onClick={() => {
            setConversion(initialConversion);
            setDisplay("0");
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
  background: #89DDFF;
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
  color: #CBE7FF;
  border: 1px #0F2433 solid;
  // border-radius: 8px;
  padding: 20px;
  background: #3D5366;

  select {
    width: 70%;
  }

  button {
    margin-top: 10px;
    background: #4DB2FF;
    font-size: 1.3rem;
    font-weight: 600;
    box-shadow: none;
    border-color: black;
    width: 50%;
    color: #0F2433;
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
