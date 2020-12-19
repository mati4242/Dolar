const compraBlue = document.getElementById("dolar__compra-blue")
const compraOficial = document.getElementById("dolar__compra-oficial")
const compraLiqui = document.getElementById("dolar__compra-liqui")
const compraPromedio = document.getElementById("dolar__compra-promedio")
const compraBolsa = document.getElementById("dolar__compra-bolsa")
const ventaBlue = document.getElementById("dolar__venta-blue")
const ventaSolidario = document.getElementById("dolar__venta-solidario")
const ventaOficial = document.getElementById("dolar__venta-oficial")
const ventaLiqui = document.getElementById("dolar__venta-liqui")
const ventaPromedio = document.getElementById("dolar__venta-promedio")
const ventaBolsa = document.getElementById("dolar__venta-bolsa")
const ventaTurista = document.getElementById("dolar__venta-turista")
const readMoreBtn = document.querySelector(".main__button")
const readMore = document.querySelector(".show-more")
const btnText = document.querySelector(".main__button--text")
const btnImg = document.querySelector(".main__button--img")


fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response => response.json())
    .then((data) => {
        compraBlue.innerHTML = data[1].casa.compra
        ventaBlue.innerHTML = data[1].casa.venta
        compraOficial.innerHTML = data[0].casa.compra
        ventaOficial.innerHTML = data[0].casa.venta
        compraLiqui.innerHTML = data[3].casa.compra
        ventaLiqui.innerHTML = data[3].casa.venta
        compraPromedio.innerHTML = data[7].casa.compra
        ventaPromedio.innerHTML = data[7].casa.venta
        compraBolsa.innerHTML = data[4].casa.compra
        ventaBolsa.innerHTML = data[4].casa.venta
        ventaTurista.innerHTML = data[6].casa.venta
        


        ventaSolidario.innerHTML = (parseFloat(data[0].casa.venta) * 1.65).toFixed(0)
    })

readMoreBtn.addEventListener("click", (e) => {

    readMore.classList.toggle("show-less");

    btnImg.classList.toggle("rotate")

    if (btnText.innerText === "Mostrar Mas") {
        btnText.innerText = "Mostrar Menos"
    } else {
        btnText.innerText = "Mostrar Mas"
    }
})




