// //TODO  implement the barcode scanner
// import React, { useState } from "react";
// import { Field, ErrorMessage } from "formik";
// // import useScanDetection from "use-scan-detection";
//
// const SampleBag = ({ bagNumber, index }) => {
//   // const [isBarcodeFocused, setIsBarcodeFocused] = useState(false);
//   const [barcodeScan, setBarcodeScan] = useState("");
//   //
//   // useScanDetection({
//   //   onComplete: setBarcodeScan,
//   //   minLength: 3,
//   //   disabled: !isBarcodeFocused, // Disable the scanner unless barcode input is focused
//   // });
//
//   return (
//     <div className="sample-bag">
//       <h4>Sample Bag {bagNumber}</h4>
//       <div className="form-group">
//         <label htmlFor={`sampleBags.${index}.barcode`}>Barcode:</label>
//         <Field
//           type="text"
//           id={`sampleBags.${index}.barcode`}
//           name={`sampleBags.${index}.barcode`}
//           onFocus={() => setIsBarcodeFocused(true)}
//           onBlur={() => setIsBarcodeFocused(false)}
//         />
//         <ErrorMessage
//           className="error"
//           component="div"
//           name={`sampleBags.${index}.barcode`}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor={`sampleBags.${index}.weight`}>Weight (grams):</label>
//         <Field
//           type="text"
//           id={`sampleBags.${index}.weight`}
//           name={`sampleBags.${index}.weight`}
//         />
//         <ErrorMessage
//           className="error"
//           component="div"
//           name={`sampleBags.${index}.weight`}
//         />
//       </div>
//     </div>
//   );
// };
//
// export default SampleBag;

// import React from "react";
// import {Field, ErrorMessage} from "formik";
// import useScanDetection from "use-scan-detection";
//
// const SampleBag = ({bagNumber, index}) => {
//     const [barcodeScan, setBarcodeScan] = React.useState("");
//
//     const barcodeRef = React.useRef(null);
//     useScanDetection({
//         onComplete: (scanResult) => {
//             setBarcodeScan(scanResult);
//             barcodeRef.current.value = scanResult;
//         },
//         minLength: 3,
//     });
//
//     return (
//         <div className="sample-bag">
//             <h4>Sample Bag {bagNumber}</h4>
//             <div className="form-group">
//                 <label htmlFor={`sampleBags.${index}.barcode`}>Barcode:</label>
//                 <Field
//                     type="text"
//                     id={`sampleBags.${index}.barcode`}
//                     name={`sampleBags.${index}.barcode`}
//                     innerRef={barcodeRef}
//                 />
//                 <ErrorMessage
//                     className="error"
//                     component="div"
//                     name={`sampleBags.${index}.barcode`}
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor={`sampleBags.${index}.weight`}>Weight (grams):</label>
//                 <Field
//                     type="text"
//                     id={`sampleBags.${index}.weight`}
//                     name={`sampleBags.${index}.weight`}
//                 />
//                 <ErrorMessage
//                     className="error"
//                     component="div"
//                     name={`sampleBags.${index}.weight`}
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default SampleBag;


//
import React from "react";
import { Field, ErrorMessage } from "formik";

const SampleBag = ({ bagNumber, index }) =>

    (

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

export default SampleBag;
