const checkAcepto = document.getElementById("acepto");
const btnSiguiente = document.getElementById("btn-siguiente");

checkAcepto.addEventListener("change", function () {
	btnSiguiente.disabled = !checkAcepto.checked;
});

btnSiguiente.addEventListener("click", function () {
	if (btnSiguiente.disabled) {
		return;
	}

	const nextPage = btnSiguiente.getAttribute("data-href");
	if (nextPage) {
		window.location.href = nextPage;
	}
});
