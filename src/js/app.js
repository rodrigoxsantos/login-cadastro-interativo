//element = document.querySelector(selectors);
//Retorna o primeiro elemento dentro do documento
//(usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento)
//que corresponde ao grupo especificado de seletores.

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
//addEventListener() registra uma única espera de evento em um único alvo.
btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
});
