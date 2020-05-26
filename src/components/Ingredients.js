import { ingredientArray } from "../utility/arrays";
import React, { Fragment } from "react";

var ingredients = ingredientArray;

const Ingredients = () => {
    return (
        <Fragment>
            {ingredients.map((item, idx) => (
                <option value={idx} key={idx}>{ingredients[idx][0]}</option>
            ))}
        </Fragment>
    );
};

export default Ingredients;
