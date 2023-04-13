// //TODO  implement the barcode scanner
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import BarcodeScannerComponent from "react-qr-barcode-scanner";


import React from "react";
import {Field, ErrorMessage} from "formik";


const SampleBag = ({bagNumber, index}) => {

    const [data, setData] = React.useState("Not Found");

    return (

        <div className="sample-bag">
            <h4>Sample Bag {bagNumber}</h4>


            <div className="form-group">
                <label htmlFor={`sampleBags.${index}.barcode`}>Barcode:</label>
                <button
                    type="button"
                    className="btn btn-secondary"
                    // onClick=
                >
                    Scaaan
                </button>
                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                        if (result) setData(result.text);
                        else setData("Not Found");
                    }}
                />
                <p>{data}</p>

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
            {/*<div className="form-group"*/}
            {/*>*/}

            {/*    /!*</button>*!/*/}
            {/*    <Field>*/}

            {/*    <QrCodeScannerIcon>icon</QrCodeScannerIcon>*/}
            {/*    </Field>*/}
            {/*</div>*/}


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
    )
};

// const SampleBag = ({ bagNumber, index }) =>
//
//     (
//
//   <div className="sample-bag">
//     <h4>Sample Bag {bagNumber}</h4>
//
//
//
//     <div className="form-group">
//       <label htmlFor={`sampleBags.${index}.barcode`}>Barcode:</label>
//           <button
//           type="button"
//           className="btn btn-secondary"
//           // onClick=
//         >
//           Scan
//         </button>
//
//       <Field
//         type="text"
//         id={`sampleBags.${index}.barcode`}
//         name={`sampleBags.${index}.barcode`}
//       />
//       <ErrorMessage
//         className="error"
//         component="div"
//         name={`sampleBags.${index}.barcode`}
//       />
//     </div>
//       {/*<div className="form-group"*/}
//       {/*>*/}
//
//       {/*    /!*</button>*!/*/}
//       {/*    <Field>*/}
//
//       {/*    <QrCodeScannerIcon>icon</QrCodeScannerIcon>*/}
//       {/*    </Field>*/}
//       {/*</div>*/}
//
//
//
//     <div className="form-group">
//       <label htmlFor={`sampleBags.${index}.weight`}>Weight (grams):</label>
//       <Field
//         type="text"
//         id={`sampleBags.${index}.weight`}
//         name={`sampleBags.${index}.weight`}
//       />
//       <ErrorMessage
//         className="error"
//         component="div"
//         name={`sampleBags.${index}.weight`}
//       />
//     </div>
//   </div>
// );


export default SampleBag;
