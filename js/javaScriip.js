const checkAcepto = document.getElementById("acepto");
const btnSiguiente = document.getElementById("btn-siguiente");

checkAcepto.addEventListener("change", function () {
	btnSiguiente.disabled = !checkAcepto.checked;
});
