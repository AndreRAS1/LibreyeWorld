// Carrega o idioma salvo ou usa PT como padrão
let currentLang = localStorage.getItem("lang") || "pt";

// Função principal que carrega o arquivo JSON do idioma
function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations);
        })
        .catch(err => console.error("Erro carregando idioma:", err));
}

// Aplica cada texto do JSON nos elementos HTML
function applyTranslations(translations) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");

        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });
}

// Quando usuário clica em um idioma
function changeLanguage(lang) {
    localStorage.setItem("lang", lang); // salva idioma
    loadLanguage(lang); // traduz na hora
}

// Ao abrir qualquer página, traduz automaticamente
loadLanguage(currentLang);
