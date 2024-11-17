//Arreglo con notas del alumno
const notasAlumno = [6, 8, 9, 2, 5, 10]
//Función para sumar notas
const suma = (notas) => notas[0] + notas[1] +notas[2] + notas[3] + notas [4] + notas [5]
//Comprobación de la función suma y resultado en consola
console.log("La suma total de notas es: ", suma(notasAlumno));

//Función para promediar notas
const promedio = (notas) =>{
    const sumaTotal = suma(notas)
    return sumaTotal/notas.length
}
//Comprobación de la función promedio y resultado final en consola
console.log("El promedio del Alumno es: ", promedio(notasAlumno));