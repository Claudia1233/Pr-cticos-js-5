// Ejercicio 05 - Uso de if, else if y else
// Autor: Claudia (2025)
// Descripción: Indica si un valor aleatorio está en el primer rango (100–300),
// en el segundo rango (500–800) o fuera de ambos.

document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  const resultado = document.getElementById("resultado");

  // Generar un número aleatorio entre 1 y 1000
  const valor = Math.floor(Math.random() * 1000) + 1;

  // Mostrar en consola (depuración)
  console.log("Valor generado:", valor);

  resultado.style.display = "block";

  // Evaluar los rangos usando if, else if, else
  if (valor >= 100 && valor <= 300) {
    resultado.textContent = ` El valor ${valor} está dentro del primer rango (100–300).`;
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else if (valor >= 500 && valor <= 800) {
    resultado.textContent = ` El valor ${valor} está dentro del segundo rango (500–800).`;
    resultado.style.color = "#0c5460";
    resultado.style.backgroundColor = "#d1ecf1";
    resultado.style.borderColor = "#bee5eb";
  } else {
    resultado.textContent = ` El valor ${valor} está fuera de los rangos válidos (100–300 y 500–800).`;
    resultado.style.color = "#721c24";
    resultado.style.backgroundColor = "#f8d7da";
    resultado.style.borderColor = "#f5c6cb";
  }
}
