// Declarar todas las constantes UNA SOLA VEZ al inicio
const buttonform = document.getElementById("buttonform");
const datatype = document.getElementById("datatype");
const buttonCheck = document.getElementById("buttonCheck");
const datatype_practica = document.getElementById("datatype_practica");

// Primer botón - Comprobar tipos de variables predefinidas
buttonform.addEventListener("click", function (event) {
  event.preventDefault();
  
  let tipo1 = "hola";
  let tipo2 = 1999;
  let tipo3 = true;
  let tipo4 = "hola mundo";
  
  datatype.innerHTML = `
    EL TIPO ES: <b>${typeof tipo1}</b><br>
    EL TIPO ES: <b>${typeof tipo2}</b><br>
    EL TIPO ES: <b>${typeof tipo3}</b><br>
    EL TIPO ES: <b>${typeof tipo4}</b><br>
  `;
});

// Segundo botón - Comprobar datos ingresados por el usuario
buttonCheck.addEventListener("click", function (event) {
  event.preventDefault();
  
  const dato1_value = document.getElementById("dato1").value;
  const dato2_value = document.getElementById("dato2").value;
  
  let dato1, dato1_tipo;
  let dato2, dato2_tipo;
  
  // Validar dato1
  if (!isNaN(dato1_value) && dato1_value.trim() !== "") {
    dato1 = Number(dato1_value);
    dato1_tipo = typeof dato1;
  } else {
    dato1 = dato1_value;
    dato1_tipo = typeof dato1;
  }
  
  // Validar dato2
  if (!isNaN(dato2_value) && dato2_value.trim() !== "") {
    dato2 = Number(dato2_value);
    dato2_tipo = typeof dato2;
  } else {
    dato2 = dato2_value;
    dato2_tipo = typeof dato2;
  }
  
  // Mostrar resultados
  datatype_practica.innerHTML = `
    El dato 1 es: <b>${dato1_tipo}</b> (valor: ${dato1})<br>
    El dato 2 es: <b>${dato2_tipo}</b> (valor: ${dato2})
  `;
});