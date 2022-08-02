window.onload = function () {

    let nombre = prompt("Saludos camarada! Cuál es tu nombre?");

    alert("Es un placer conocerte " + nombre + "!")

    document.write(nombre)

    alert("Esta tienda vende Mangas(a), Libros(b), Figuras(c) y Posters(d). A continuación podrás elegir el/los producto/s que quieras comprar. Pero cuidado! Solo puedes hacerlo con la letra correspondiente a cada producto nombrado anteriormente.")
    
    let total = 0;
    const precioMangas = 3000;
    const precioLibros = 4500;
    const precioFiguras = 4000;
    const precioPosters = 500;

    let producto = prompt(nombre + ", ingresa la letra correspondiente al producto que elijas o 'z' para finalizar la orden de compra.");
    while(producto != "z") {
        switch (producto) {
            case "a":
                Manga();
                break;
            case "b":
                Libro();
                break;
            case "c":
                Figura();
                break;
            case "d":
                Poster();
                break;
            default:
                console.log("0");
                break;
        }
    
        producto = prompt(nombre + ", ingresa la letra correspondiente al producto que elijas o 'z' para finalizar la orden de compra.");
    }

    function Manga() {
        total1 = total + precioMangas;
        console.log("Agregaste Manga a tu carrito, tu total a pagar por el momento es de: $" + total1)
        return Manga;
    }

    function Libro() {
        total2 = total + precioLibros;
        console.log("Agregaste Libro a tu carrito, tu total a pagar por el momento es de: $" + total2)
        return Libro;
    }

    function Figura() {
        total3 = total + precioFiguras;
        console.log("Agregaste Figura a tu carrito, tu total a pagar por el momento es de: $" + total3)
        return Figura;
    }

    function Poster() {
        total4 = total + precioPosters;
        console.log("Agregaste Poster a tu carrito, tu total a pagar por el momento es de: $" + total4)
        return Poster;
    }
	
	function respuesta(){
        respuesta = resultado
        resultado = Manga(total1) + Libro(total2) + Figura(total3) + Poster(total4)
    }

    let resultado = alert("El total a pagar es: $" + respuesta)
}