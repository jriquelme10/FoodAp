import axios from "axios";

const saveProduct = (nombre, categoria, descripcion) => {
  fetch("http://192.168.56.1:8000/api/plato", {
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
