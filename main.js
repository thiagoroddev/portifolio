/* Carrossel */

const carrossel = document.querySelector(".carrossel");
const btnAnterior = document.querySelector(".btn-carrossel.anterior");
const btnProximo = document.querySelector(".btn-carrossel.proximo");

const scrollAmount = 1200;

btnAnterior.addEventListener("click", () => {
  carrossel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

btnProximo.addEventListener("click", () => {
  carrossel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

/* Confirmação de envio do formulário */

const form = document.getElementById("formContato");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Envia os dados para o formulario manualmente
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Mensagem enviada!");
        console.log("Mensagem enviada");
        form.reset();
      } else {
        alert("Não foi possível enviar a mensagem, tente mais uma vez");
        console.log("Não foi possível enviar a mensagem, tente mais uma vez");
      }
    })
    .catch((error) => {
      alert("Erro de conexão. Tente mais uma vez");
      console.log("Erro de conexão. Tente mais uma vez");
    });
});
