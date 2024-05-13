const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mostrarMenu() {
  console.log('Seleccione el ejercicio que desea ejecutar:');
  console.log('1. Ejercicio 1');
  console.log('2. Ejercicio 2');
  console.log('3. Ejercicio 3');
  console.log('4. Ejercicio 4');
  console.log('5. Ejercicio 5');
  console.log('6. Ejercicio 6');
  console.log('7. Ejercicio 7');
  console.log('0. Salir');
}

function ejecutarEjercicio(numero) {
  switch (numero) {
    case '1':
      ejecutarEjercicio1();
      break;
    case '2':
      ejecutarEjercicio2();
      break;
    case '3':
      ejecutarEjercicio3();
      break;
    case '4':
      ejecutarEjercicio4();
      break;
    case '5':
      ejecutarEjercicio5();
      break;
    case '6':
      ejecutarEjercicio6();
      break;
    case '7':
      ejecutarEjercicio7();
      break;
    case '0':
      console.log('Saliendo del programa...');
      rl.close();
      break;
    default:
      console.log('Opción no válida. Por favor, seleccione un número del 0 al 7.');
      break;
  }
}

function ejecutarEjercicio1() {
  rl.question('Ingrese un número: ', (numero) => {
    if (isNaN(numero)) {
      console.log('¡Error! Por favor, ingrese un número válido.');
    } else if (numero > 0) {
      console.log('El número ingresado es positivo.');
    } else if (numero < 0) {
      console.log('El número ingresado es negativo.');
    } else {
      console.log('El número ingresado es cero.');
    }
    mostrarMenu();
  });
}

//EJERCICIO 1
function ejecutarEjercicio1() {
  rl.question('Ingrese un número: ', (numero) => {
    if (isNaN(numero)) {
      console.log('¡Error! Por favor, ingrese un número válido.');
    } else if (numero > 0) {
      console.log('El número ingresado es positivo.');
    } else if (numero < 0) {
      console.log('El número ingresado es negativo.');
    } else {
      console.log('El número ingresado es cero.');
    }
    mostrarMenu();
  });
}

//EJERCICIO 2
function ejecutarEjercicio2() {
  rl.question('Ingrese el primer número: ', (numero1) => {
    rl.question('Ingrese el segundo número: ', (numero2) => {
      rl.question('Ingrese el tercer número: ', (numero3) => {
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
        numero3 = parseFloat(numero3);

        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
          console.log('¡Error! Por favor, ingrese números válidos.');
        } else {
          if (numero1 === numero2 && numero2 === numero3) {
            console.log('Los tres números son iguales.');
          } else {
            let mayor, medio, menor;

            // Comparaciones para encontrar el mayor, el medio y el menor
            if (numero1 >= numero2 && numero1 >= numero3) {
              mayor = numero1;
              medio = numero2 >= numero3 ? numero2 : numero3;
              menor = numero2 <= numero3 ? numero2 : numero3;
            } else if (numero2 >= numero1 && numero2 >= numero3) {
              mayor = numero2;
              medio = numero1 >= numero3 ? numero1 : numero3;
              menor = numero1 <= numero3 ? numero1 : numero3;
            } else {
              mayor = numero3;
              medio = numero1 >= numero2 ? numero1 : numero2;
              menor = numero1 <= numero2 ? numero1 : numero2;
            }

            console.log(`El número mayor es: ${mayor}`);
            console.log(`El número del medio es: ${medio}`);
            console.log(`El número menor es: ${menor}`);
          }
        }
        mostrarMenu();
      });
    });
  });
}

//EJERCICIO 3
function ejecutarEjercicio3() {
  rl.question('Ingresa un número para calcular su factorial: ', (num) => {
    num = parseInt(num);

    if (isNaN(num) || num < 0) {
      console.log('Por favor, ingresa un número entero positivo.');
      mostrarMenu();
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }

    console.log(`El factorial de ${num} es: ${factorial}`);
    mostrarMenu();
  });
}

//EJERCICIO 4
function ejecutarEjercicio4() {
  rl.question('Ingresa un número para determinar si es par o impar: ', (num) => {
    num = parseInt(num);

    if (isNaN(num)) {
      console.log('Por favor, ingresa un número válido.');
    } else {
      if (num % 2 === 0) {
        console.log(`${num} es un número par.`);
      } else {
        console.log(`${num} es un número impar.`);
      }
    }

    mostrarMenu();
  });
}

//EJERCICIO 5
function ejecutarEjercicio5() {
  rl.question('Ingresa el primer color primario (azul, rojo o amarillo): ', (color1) => {
    rl.question('Ingresa el segundo color primario (azul, rojo o amarillo): ', (color2) => {
      const resultado = mezclarColores(color1.toLowerCase(), color2.toLowerCase());
      console.log(resultado);
      mostrarMenu();
    });
  });
}

function mezclarColores(color1, color2) {
  if (color1 === 'azul' && color2 === 'amarillo' || color1 === 'amarillo' && color2 === 'azul') {
    return 'Verde';
  } else if (color1 === 'azul' && color2 === 'rojo' || color1 === 'rojo' && color2 === 'azul') {
    return 'Morado';
  } else if (color1 === 'rojo' && color2 === 'amarillo' || color1 === 'amarillo' && color2 === 'rojo') {
    return 'Naranja';
  } else {
    return 'Error: Combinación de colores no válida. Solo se admiten combinaciones de azul, rojo y amarillo.';
  }
}

//EJERCICIO 6
const meses = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

function ejecutarEjercicio6() {
  rl.question('Ingresa el número del mes (1-12): ', (numeroMes) => {
    const indice = parseInt(numeroMes) - 1;
    if (indice >= 0 && indice < 12) {
      console.log(`El mes correspondiente al número ${numeroMes} es ${meses[indice]}.`);
    } else {
      console.log('Número de mes inválido.');
    }
    mostrarMenu();
  });
}

//EJERCICIO 7
const categorias = {
  moto: 'Motocicleta',
  auto: 'Automóvil',
  camion: 'Camión',
  bicicleta: 'Bicicleta'
};

function ejecutarEjercicio7() {
  rl.question('Ingresa la categoría del vehículo (moto, auto, camion, bicicleta): ', (categoria) => {
    categoria = categoria.toLowerCase();
    const tipoVehiculo = categorias[categoria];
    if (tipoVehiculo) {
      console.log(`El vehículo de categoría ${categoria} es un ${tipoVehiculo}.`);
    } else {
      console.log('Categoría de vehículo no válida.');
    }
    mostrarMenu();
  });
}

function iniciarPrograma() {
  mostrarMenu();
  rl.question('Ingrese el número correspondiente al ejercicio que desea ejecutar: ', (opcion) => {
    ejecutarEjercicio(opcion);
  });
}

// Iniciar el programa
iniciarPrograma();