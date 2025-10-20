function handleLogin(e){
e.preventDefault();
const email = document.getElementById('loginEmail').value.trim();
const pw = document.getElementById('loginPassword').value;
const msg = document.getElementById('loginMsg');

const user = JSON.parse(localStorage.getItem("usuario"));

if(user && email === user.email && pw === user.senha){
    msg.textContent = "✅ Login realizado com sucesso!";
    msg.style.color = "lightgreen";

    setTimeout(() => {
    window.location.href = "home.html";
    }, 1500);
} else {
    msg.textContent = "❌ Email ou senha inválidos!";
    msg.style.color = "red";
}
}
const form = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const senha = form["senha"].value;
  const confirmarSenha = form["confirmar-senha"].value;

  if (senha !== confirmarSenha) {
    mensagem.textContent = "❌ As senhas não coincidem!";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "✅ Cadastro realizado com sucesso!";
    mensagem.style.color = "lightgreen";

    const user = {
      nome: form["nome"].value,
      email: form["email"].value,
      senha: senha
    };
    localStorage.setItem("usuario", JSON.stringify(user));

    setTimeout(() => {
      window.location.href = "entrada.html"; //
    }, 1500);
  }
})
const TRANSLATIONS = {
  'en': {
      'Language': 'Language',
      'Updates': 'Updates'
  },
  'pt-br': {
      'Language': 'Linguagens',
      'Update': 'Atualizações'
  }
};
function setLanguage(lang) {
  document.querySelectorAll('[data-lang-str]').forEach(element => {
      const key = element.getAttribute('data-lang-str');
      element.textContent = TRANSLATIONS[lang][key];
  });
}