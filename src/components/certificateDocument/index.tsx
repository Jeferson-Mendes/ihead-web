import React from "react";
// import { Document, Text, Page, StyleSheet, View } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4'
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   });

const CertificateDocument:React.FC = () => {

    return (
        <div id="PDF">
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
            <footer>Footer do pdf.</footer>
        </div>
    )
}
export default CertificateDocument;
