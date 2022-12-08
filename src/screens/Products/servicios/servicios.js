import axios from "axios";
import { URLBASE } from "../../../../URL_API";
const saveProduct = (nombre, categoria, descripcion) => {
  fetch(`${URLBASE}` + "/api/plato", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      categoria: categoria,
      descripcion: descripcion,
      precio: 1000,
    }),
  })
    .then((res) => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
};

export default saveProduct;
