import { unitArray } from "../utility/arrays";
import React, { Fragment } from "react";

const units = unitArray;

const Units = () => {
    return (
        <Fragment>
            {units.map((item) => (
                <option value={item[1]}>{item[0]}</option>
            ))}
        </Fragment>
    );
};

export default Units;
