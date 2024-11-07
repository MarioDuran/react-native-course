import React, { useState } from 'react';
import { Button, View, Text, ActivityIndicator } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const DemoCSVToPDF = () => {
  const [isLoading, setIsLoading] = useState(false);

  const csvData = 
  `ID de Venta,Fecha,Producto,Cantidad,Precio Unitario,Descuento,Total,Vendedor
  001,2023-10-01,Camisa,2,25.00,5%,47.50,Laura
  002,2023-10-01,Pantalones,1,40.00,0%,40.00,Pedro
  003,2023-10-02,Chaqueta,1,80.00,10%,72.00,Laura
  004,2023-10-02,Zapatos,3,30.00,5%,85.50,Carlos
  005,2023-10-03,Gorra,5,15.00,0%,75.00,Ana
  006,2023-10-04,Cinturón,2,10.00,0%,20.00,Pedro
  007,2023-10-05,Camisa,3,25.00,10%,67.50,Carlos
  008,2023-10-06,Pantalones,2,40.00,5%,76.00,Laura
  009,2023-10-07,Chaqueta,1,80.00,0%,80.00,Pedro
  010,2023-10-08,Zapatos,4,30.00,10%,108.00,Ana`;


  const convertCsvToHtml = (csvData) => {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    const headersHtml = headers.map( header => `<th> ${header}</th>`).join('');
    const rowsHtml = rows.slice(1).map( row => {
      const cells = row.split(',')
      return `<tr>${cells.map(cell => `<td> ${cell}</td>`).join('')}</tr>`;
    }).join('');

    return `
      <html>
        <body>
          <img
            src="https://peiix.com/img/Peiix_logotipo_color.png"
            style="width: 20vw;" />
            <h1>CSV Data in PDF </h1>
            <table border="1" style="width: 100%; border-collapes: collapese;">
              <thead>
                <tr> ${headersHtml} </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
        </body>
      </html>    
    `;
  };

  const exportCsvToPdf = async () => {
    setIsLoading(true);

    try {
      const htmlContent = convertCsvToHtml(csvData);
      const {uri} = await Print.printToFileAsync({html: htmlContent});

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        console.log('Sharing not available on this device');
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Export CSV to PDF Demo</Text>
      <Button title="Export CSV to PDF" onPress={exportCsvToPdf} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}
    </View>
  );
};

export default DemoCSVToPDF;
