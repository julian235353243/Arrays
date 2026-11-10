// =====================================================
// ARREGLOS
// =====================================================

function SaludarAprendices() {

    let aprendices = [
        'Cedeño', 'Rojas', 'Tinoco', 'Juan Jose',
        'Julian', 'Andres', 'Juan Diego',
        'Yen Manuelis', 'Maria Paula', 'Montoya',
        'Triviño', 'Erick', 'Erika', 'Daniel',
        'Juanfer', 'Richard', 'Guillen',
        'Juan Hoyos', 'Leandro'
    ];

    // Mostrar el aprendiz en la posición 3 (índice 2)
    console.log("Aprendiz en la posición 3:");
    console.log(aprendices[2]);

    // Mostrar la cantidad de elementos del arreglo
    console.log("Cantidad de aprendices:");
    console.log(aprendices.length);

    // Modificar un aprendiz (posición 4, índice 3)
    aprendices[3] = "Angely";

    console.log("Aprendiz modificado en la posición 4:");
    console.log(aprendices[3]);

    console.log("Cantidad después de modificar (no cambia):");
    console.log(aprendices.length);

    // Agregar un nuevo aprendiz
    aprendices.push("Carlos");

    console.log("Lista actualizada de aprendices:");
    console.log(aprendices);
}

function listaEstudiantes() {

    // Crear un arreglo con 5 estudiantes
    let estudiantes = [
        'Julian', 'Evelyn', 'Mariana',
        'Juan Jose', 'Andres'
    ];

    console.log("Lista de estudiantes");
    console.log(estudiantes);

    console.log("Primer estudiante");
    console.log(estudiantes[0]);

    console.log("Tercer estudiante");
    console.log(estudiantes[2]);

    console.log("Último estudiante");
    console.log(estudiantes[estudiantes.length - 1]);

    console.log("Cantidad de estudiantes");
    console.log(estudiantes.length);

    console.log("Estudiantes y sus posiciones:");

    for (let i = 0; i < estudiantes.length; i++) {
        console.log("Posición " + (i + 1) + ": " + estudiantes[i]);
    }

    // Ingresar un nuevo estudiante
    let nuevoEstudiante = prompt("Ingrese el nombre del nuevo estudiante:");

    if (nuevoEstudiante !== null && nuevoEstudiante.trim() !== "") {
        estudiantes.push(nuevoEstudiante.trim());
    }

    console.log("Nueva cantidad de estudiantes:");
    console.log(estudiantes.length);

    // Buscar un estudiante
    let buscar = prompt("Ingrese el nombre del estudiante que desea buscar:");

    if (buscar === null || buscar.trim() === "") {
        console.log("No se ingresó un nombre válido.");
    } else if (estudiantes.includes(buscar.trim())) {
        console.log(buscar.trim() + " sí se encuentra registrado.");
    } else {
        console.log(buscar.trim() + " no se encuentra registrado.");
    }

    console.log("Lista actualizada de estudiantes:");
    console.log(estudiantes);
}

function administrarProductos() {

    let productos = ['Arroz', 'Leche', 'Pan', 'Huevos', 'Azúcar'];

    console.log("Productos registrados:");
    console.log(productos);

    // Modificar el segundo producto (índice 1)
    productos[1] = 'Queso';

    console.log("Segundo producto modificado:");
    console.log(productos);

    // Agregar productos
    productos.push('Aceite');
    productos.unshift('Café');

    console.log("Arreglo actualizado:");
    console.log(productos);

    // Buscar un producto
    let buscar = prompt("Ingrese el producto que desea buscar:");

    let posicion = productos.indexOf(buscar);

    if (posicion !== -1) {
        console.log("El producto sí está registrado.");
        console.log("Posición del producto: " + (posicion + 1));
    } else {
        console.log("El producto no está registrado.");
    }

    // Modificar un producto por posición (validando que sea un entero)
    let posicionModificar = Number(
        prompt("Ingrese la posición del producto que desea modificar:")
    );

    if (Number.isInteger(posicionModificar) && posicionModificar >= 1 && posicionModificar <= productos.length) {

        let nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");

        if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
            productos[posicionModificar - 1] = nuevoNombre.trim();
            console.log("Producto modificado correctamente.");
        }

    } else {
        console.log("Posición no válida.");
    }

    // Eliminar el último producto
    productos.pop();

    console.log("Cantidad de productos:");
    console.log(productos.length);

    console.log("Listado final:");
    console.log(productos);
}

function eliminarElementos() {

    // Crear un arreglo con seis ciudades de Colombia
    let ciudades = [
        'Bogotá', 'Medellín', 'Cali',
        'Cartagena', 'Barranquilla', 'Bucaramanga'
    ];

    // Eliminar la última ciudad
    ciudades.pop();

    console.log("Después de eliminar la última ciudad:");
    console.log(ciudades);

    // Eliminar la primera ciudad
    ciudades.shift();

    console.log("Después de eliminar la primera ciudad:");
    console.log(ciudades);

    // Eliminar un elemento del índice 3 (cuarto elemento)
    ciudades.splice(3, 1);

    console.log("Resultado final:");
    console.log(ciudades);

    // Agregar nuevas ciudades
    ciudades.push('Pereira');
    ciudades.push('Manizales');

    console.log("Cantidad de ciudades:");
    console.log(ciudades.length);

    console.log("Listado de ciudades:");

    for (let i = 0; i < ciudades.length; i++) {
        console.log("Posición " + (i + 1) + ": " + ciudades[i]);
    }

    // Buscar una ciudad
    let buscar = prompt("Ingrese el nombre de una ciudad:");

    if (buscar !== null && ciudades.includes(buscar)) {
        console.log("La ciudad " + buscar + " sí se encuentra registrada.");
    } else {
        console.log("La ciudad " + buscar + " no se encuentra registrada.");
    }
}

function smartsalud() {

    let especialidades = [
        "Pediatría",
        "Cardiología",
        "Dermatología",
        "Neurología",
        "Oftalmología",
        "Traumatología",
        "Ginecología",
        "Medicina general"
    ];

    // Mostrar especialidades registradas
    console.log("Especialidades registradas:");
    console.log(especialidades);

    // Consultar por índice
    console.log("Primera especialidad:", especialidades[0]);
    console.log("Cuarta especialidad:", especialidades[3]);

    // Cantidad de elementos
    console.log("Cantidad:", especialidades.length);

    // Recorrer el arreglo
    for (let i = 0; i < especialidades.length; i++) {
        console.log("Posición " + (i + 1) + ": " + especialidades[i]);
    }

    // Agregar especialidades
    especialidades.unshift("Endocrinología"); // Al inicio
    especialidades.push("Psiquiatría");       // Al final
    console.log("Después de agregar:", especialidades);

    // Modificar por posición (índice 2 = tercera especialidad)
    especialidades[2] = "Alergología";
    console.log("Después de modificar:", especialidades);

    // Eliminar especialidades
    especialidades.pop();        // Elimina la última
    especialidades.shift();      // Elimina la primera
    especialidades.splice(1, 1); // Elimina la del índice 1
    console.log("Después de eliminar:", especialidades);

    // Buscar una especialidad
    let buscada = "Neurología";

    if (especialidades.includes(buscada)) {
        let posicion = especialidades.indexOf(buscada);
        console.log(buscada + " está registrada en la posición " + (posicion + 1) + ".");
    } else {
        console.log(buscada + " no está registrada.");
    }

    // Orden alfabético en español, sin modificar el original
    let ordenadas = [...especialidades].sort((a, b) => a.localeCompare(b, "es"));
    console.log("Especialidades ordenadas:", ordenadas);

    // Contar especialidades que contienen una letra
    let letra = "o";
    let cantidadConLetra = 0;

    for (let i = 0; i < especialidades.length; i++) {
        if (especialidades[i].toLowerCase().includes(letra)) {
            cantidadConLetra++;
        }
    }

    console.log("Especialidades que contienen la letra '" + letra + "':", cantidadConLetra);
    console.log("Cantidad final:", especialidades.length);
}

function busquedaEstudiantes() {

    // Crear un arreglo con ocho estudiantes
    let estudiantes = [
        'Julian', 'Evelyn', 'Mariana', 'Juan Jose',
        'Andres', 'Maria Paula', 'Daniel', 'Erika'
    ];

    console.log("Estudiantes iniciales:");
    console.log(estudiantes);

    // Primera y segunda búsqueda
    buscarEstudiante(estudiantes);
    buscarEstudiante(estudiantes);

    // Contar estudiantes cuyo nombre empieza por una letra
    let letra = prompt("Ingrese una letra para contar los estudiantes que empiezan por ella:");

    if (letra !== null && letra.trim() !== "") {
        letra = letra.trim().toLowerCase().charAt(0);
        let contador = 0;

        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].toLowerCase().startsWith(letra)) {
                contador++;
            }
        }

        console.log("Estudiantes cuyo nombre empieza por '" + letra + "': " + contador);
    }

    // Mostrar todos los nombres con un for
    console.log("Listado de estudiantes:");
    for (let i = 0; i < estudiantes.length; i++) {
        console.log("Posición " + (i + 1) + ": " + estudiantes[i]);
    }

    // Listado actualizado y cantidad total
    console.log("Listado actualizado:", estudiantes);
    console.log("Cantidad total de estudiantes:", estudiantes.length);
}

function buscarEstudiante(estudiantes) {

    let nombre = prompt("Ingrese el nombre del estudiante:");

    if (nombre === null || nombre.trim() === "") {
        console.log("No se ingresó un nombre válido.");
        return;
    }

    nombre = nombre.trim();

    // Copia en minúsculas para comparar sin distinguir mayúsculas
    let minusculas = estudiantes.map(e => e.toLowerCase());
    let buscado = nombre.toLowerCase();

    if (minusculas.includes(buscado)) {

        let posicion = minusculas.indexOf(buscado);

        console.log(nombre + " sí fue encontrado.");
        console.log("Se encuentra en la posición " + (posicion + 1) + ".");

    } else {

        console.log(nombre + " no se encuentra registrado.");

        if (confirm("¿Desea agregar a " + nombre + " a la lista?")) {
            estudiantes.push(nombre);
            console.log(nombre + " fue agregado.");
        }
    }
}

function analisisNumeros() {

    // Crear un arreglo con diez números enteros
    let numeros = [4, -7, 12, 0, 15, -3, 8, 0, -10, 6];

    // Mostrar todos los números
    console.log("Números del arreglo:");
    for (let i = 0; i < numeros.length; i++) {
        console.log("Posición " + (i + 1) + ": " + numeros[i]);
    }

    // Suma
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log("Suma:", suma);

    // Promedio
    let promedio = suma / numeros.length;
    console.log("Promedio:", promedio);

    // Pares e impares
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Pares:", pares, "| Impares:", impares);

    // Mayor y menor
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    console.log("Mayor:", mayor, "| Menor:", menor);

    // Positivos, negativos y ceros
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log("Positivos:", positivos, "| Negativos:", negativos, "| Ceros:", ceros);

    // Números mayores que el promedio
    let mayoresPromedio = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > promedio) {
            mayoresPromedio.push(numeros[i]);
        }
    }

    console.log("Números mayores que el promedio:", mayoresPromedio);

    // Buscar un número ingresado por el usuario
    let entrada = prompt("Ingrese un número entero para buscarlo en el arreglo:");

    if (entrada !== null && entrada.trim() !== "" && Number.isInteger(Number(entrada))) {

        let buscado = Number(entrada);

        if (numeros.includes(buscado)) {
            console.log(buscado + " sí se encuentra en la posición " + (numeros.indexOf(buscado) + 1) + ".");
        } else {
            console.log(buscado + " no se encuentra en el arreglo.");
        }

    } else {
        console.log("Entrada no válida.");
    }

    // Orden inverso (copia, porque reverse() modifica el arreglo)
    let inverso = [...numeros].reverse();
    console.log("Orden inverso:", inverso);

    // Orden de menor a mayor (copia, con función de comparación)
    let ordenado = [...numeros].sort((a, b) => a - b);
    console.log("Orden de menor a mayor:", ordenado);

    // Arreglo original
    console.log("Arreglo original:", numeros);
}

// =====================================================
// OBJETOS
// =====================================================

function es() {

    // Datos guardados
    const estudiante = {
        nombre: "juan",
        apellido: "Perez",
        edad: 18,
        programa: "ADSO",
        numero: 123456,
        correo: "juanperez123@gmail.com"
    };

    // Mostrar todos los datos registrados
    console.log("Mostrando todos los datos registrados", estudiante);

    // Mostrar nombre y apellido
    console.log("Nombre:", estudiante.nombre);
    console.log("Apellido:", estudiante.apellido);

    // Mostrar programa estudiado
    console.log("Mostrando programa estudiado", estudiante["programa"]);

    // Cambiar edad
    estudiante.edad = 20;

    // Agregar ciudad
    estudiante.ciudad = "Bogotá";

    // Eliminar propiedad correo
    delete estudiante.correo;

    // Recorrer propiedades con for...in
    for (let propiedad in estudiante) {
        console.log(propiedad + ": " + estudiante[propiedad]);
    }

    // Mostrar objeto actualizado
    console.log("Mostrar todo el objeto", estudiante);
}

function re() {

    const producto = {
        codigo: "p1",
        nombre: "pan",
        categoria: "comida",
        precio: 200,
        cantidad: 1000,
        MostrarInfo: function () {
            console.log("Código:", this.codigo);
            console.log("Nombre:", this.nombre);
            console.log("Categoría:", this.categoria);
            console.log("Precio:", this.precio);
            console.log("Cantidad:", this.cantidad);
            console.log("Marca:", this.marca);

            let valorTotal = this.precio * this.cantidad;
            console.log("El valor total del inventario es de:", valorTotal);
        }
    };

    // Mostrar producto completo
    console.log("Mostrando información completa:");
    console.log(producto);

    // Calcular valor del inventario
    let valorTotal = producto.precio * producto.cantidad;
    console.log("El valor total del inventario es de:", valorTotal);

    // Modificar precio
    producto.precio = 500;

    // Mostrar cantidad disponible
    console.log("Cantidad disponible:", producto.cantidad);

    // Agregar marca
    producto.marca = "Bimbo";

    // Ejecutar el método y mostrar el objeto actualizado
    producto.MostrarInfo();
    console.log("Objeto actualizado:", producto);
}

function gs() {

    const persona = {
        nombre: "Julian",
        edad: 18,
        genero: "Masculino",
        saludar: function () {
            console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años");
        }
    };

    persona.saludar();
}

function empleado2() {

    const empleado = {
        nombre: prompt("Ingrese nombre del trabajador"),
        cargo: prompt("Ingrese cargo del empleado"),
        salarioMensual: parseInt(prompt("Ingrese salario mensual")),
        diasTrabajados: parseInt(prompt("Ingrese días trabajados")),
        porcentajeDescuento: parseInt(prompt("Ingrese porcentaje de descuento")),

        // Salario por los días trabajados: (salario mensual / 30) × días
        calcularSalario: function () {
            let salarioDiario = this.salarioMensual / 30;
            return Math.round(salarioDiario * this.diasTrabajados);
        },

        // Descuento: porcentaje del salario ganado
        calcularDescuento: function () {
            return Math.round(this.calcularSalario() * this.porcentajeDescuento / 100);
        },

        calcularTotalpagar: function () {
            let salario = this.calcularSalario();
            let descuento = this.calcularDescuento();
            let total = salario - descuento;

            alert("Salario por días trabajados: " + salario);
            alert("Descuento: " + descuento);
            alert("Total a pagar: " + total);
        }
    };

    // Ejecutar el cálculo
    empleado.calcularTotalpagar();
}