
import { createAuthenticatedClient} from "@interledger/open-payments";
import  fs  from "fs";

// a. Importar dependencias y configurar el cliente

(async () => {
  const privateKey = fs.readFileSync("private.key", "utf8");
  const client = await createAuthenticatedClient({
    walletAddressUrl: "https://ilp.interledger-test.dev/Lizz", 
    privateKey: 'private.key',
    keyId: "457c26e3-5526-43d2-b41e-c403f680b3bb",
        });

 // b. Crear una instancia del cliente Open Payments



    // c. Cargar la clave privada del archivo


    // d. Configurar las direcciones de las billeteras del remitente y el receptor



    // Flujo de pago entre pares



// 1. Obtener una concesiÃ³n para un pago entrante)

const sendingWalletAddress = await client.walletAddress.get({
    url:"https://ilp.interledger-test.dev/Lizz"
        } );

    const receivingwalletAddress = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/Faty"
        } );

     console.log(sendingWalletAddress, receivingwalletAddress);

})();