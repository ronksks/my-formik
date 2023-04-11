// TODO if totalWeight > seedsWeight -> alert

import React from "react";
import {Formik, Form, Field, FieldArray, ErrorMessage} from "formik";
import * as Yup from "yup";
import "../Styles/SampleFormStyle.css";

const initialValues = {
    seedsWeight: "",
    sampleBags: [],
};

const validationSchema = Yup.object().shape({
    seedsWeight: Yup.number().required("Seeds weight is required"),
    sampleBags: Yup.array()
        .of(
            Yup.object().shape({
                barcode: Yup.string().required("Barcode is required"),
                weight: Yup.number().required("Weight is required"),
            })
        )
        .required("At least one sample bag is required")

});

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

const SampleForm = () => {
    const [bagNumber, setBagNumber] = React.useState(1);

    function getTotalSampleBagWeight(sampleBags) {
        return sampleBags.reduce((totalWeight, bag) => {
            return totalWeight + parseFloat(bag.weight || 0);
        }, 0);
    }
    return (
        <div className="form-container">
            <h2>Sample Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={
                    (values) => {
                        console.log("submited");
                        console.log(values.sampleBags);
                    }
                }
            >
                {({values, touched, isSubmitting}) => (
                    <Form className="form">
                        <div className="form-group">
                            <label htmlFor="seedsWeight">Seeds weight (grams):</label>
                            <Field type="text" id="seedsWeight" name="seedsWeight"/>
                            <ErrorMessage
                                className="error"
                                component="div"
                                name="seedsWeight"
                            />
                        </div>

                        <FieldArray name="sampleBags">
                            {({insert, remove, push}) => (
                                <>
                                    {values.sampleBags.length > 0 &&
                                        values.sampleBags.map((sampleBag, index) => (
                                            <div key={index}>
                                                <SampleBag
                                                    index={index}
                                                    bagNumber={sampleBag.bagNumber}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn remove"
                                                    onClick={() => {
                                                        remove(index);
                                                        //TODO check what to do if remove
                                                        // setBagNumber((prevBagNumber) => prevBagNumber -1);
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="btn add"
                                        //TODO - check this

                                        disabled={
                                            getTotalSampleBagWeight(values.sampleBags) >= values.seedsWeight &&
                                            values.sampleBags.length > 0
                                        }
                                        onClick={() => {
                                            push({barcode: "", weight: "", bagNumber});
                                            setBagNumber((prevBagNumber) => prevBagNumber + 1);
                                        }}
                                    >
                                        Add Sample Bag
                                    </button>
                                </>
                            )}
                        </FieldArray>

                        <div className="form-group">
                            <label htmlFor="totalWeight">Total Weight:</label>
                            <Field
                                type="text"
                                id="totalWeight"
                                name="totalWeight"
                                readOnly
                                value={getTotalSampleBagWeight(values.sampleBags)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn submit"
                            // in this setup-> disable get true if 152 in false,
                            //but once disable turns off it wont turn on again when i remove
                            disabled={
                                //false as loge there is a seedsWeight
                                !(values.seedsWeight > 0) ||
                                // false as long there are sampleBags
                                (values.sampleBags.length == 0) ||
                                // false as long as totalWeight != seedsWeight
                                (
                                    getTotalSampleBagWeight(values.sampleBags) != values.seedsWeight
                                )

                            }
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SampleForm;
