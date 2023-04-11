import {ErrorMessage, Field} from "formik";
import React from "react";

const SampleBag = ({bagNumber, index}) => (
    <div className="sample-bag">
        <h4>Sample Bag {bagNumber}</h4>
        <div className="form-group">
            <label htmlFor={`sampleBags.${index}.barcode`}>Barcode:</label>
            <Field
                type="text"
                id={`sampleBags.${index}.barcode`}
                name={`sampleBags.${index}.barcode`}
            />
            <ErrorMessage
                className="error"
                component="div"
                name={`sampleBags.${index}.barcode`}
            />
        </div>
        <div className="form-group">
            <label htmlFor={`sampleBags.${index}.weight`}>Weight (grams):</label>
            <Field
                type="text"
                id={`sampleBags.${index}.weight`}
                name={`sampleBags.${index}.weight`}
            />
            <ErrorMessage
                className="error"
                component="div"
                name={`sampleBags.${index}.weight`}
            />
        </div>
    </div>
);