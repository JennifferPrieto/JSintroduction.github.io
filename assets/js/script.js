let precio = 400000;





const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");


let cantidad = 0;

precioSpan.textContent = precio;

function actualizarTotal() {
    totalSpan.innerHTML = precio * cantidad;
    cantidadSpan.innerHTML = cantidad ;
}

btnSumar.onclick = function (){
    cantidad++;
    actualizarTotal();
}

btnRestar.onclick = function (){
   if (cantidad > 0) {
    cantidad--;
   
    actualizarTotal();
    }
};

actualizarTotal();

