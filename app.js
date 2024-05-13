console.log("Hello world! :D");

const MAX_INTENSIDAD = 256;



/**
 * Modifica el elemento titulo
 */
function modificarTitulo() {
    console.log("Activando funcionalidad");
    let textoInput = document.querySelector("#ingreso-titulo").value;
    let h2TituloPrincipal = document.querySelector("#titulo-principal");
    let bodyElemento = document.querySelector("#elemento-principal");
    let contenedor = document.querySelector("#contenedor");
    console.log(textoInput);
    h2TituloPrincipal.textContent = textoInput;
    h2TituloPrincipal.style.fontFamily  = "monospace";
    h2TituloPrincipal.style.color = generarColorAleatorio();
    contenedor.style.backgroundColor = generarColorAleatorio();
    bodyElemento.style.backgroundColor = generarColorAleatorio();

    
}














/**
 * Genera un color aleatorio en formato RGB
 * @returns el color generado aleatoriamente
 */
function generarColorAleatorio() {
    let intensidadR = intensidadAleatoria();
    let intensidadG = intensidadAleatoria();
    let intensidadB = intensidadAleatoria();
    
    return `rgb(${intensidadR},${intensidadG},${intensidadB})`;
}



















/**
 * Genera una intensidad aleatoria para asignar al rango de color especifico
 * @returns la intensidad generada aleatoriamente
 */
function intensidadAleatoria() {
    return Math.random() * MAX_INTENSIDAD;
}

