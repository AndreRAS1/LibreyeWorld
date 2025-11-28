// Banco de perguntas
const questions = [
    {
        img: "https://i.imgur.com/zEtQFqF.png",
        question: "Qual é o sinal da letra A?",
        options: ["A", "B", "C"],
        correct: 0
    },
    {
        img: "https://i.imgur.com/4b7td7A.png",
        question: "Qual é o sinal da letra B?",
        options: ["C", "B", "A"],
        correct: 1
    },
    {
        img: "https://i.imgur.com/iTJkG0B.png",
        question: "Qual é o sinal da letra C?",
        options: ["C", "A", "B"],
        correct: 0
    }
];

let index = 0;

function loadQuestion() {
    const q = questions[index];

    document.getElementById("question").innerText = q.question;

    const img = document.getElementById("img");
    img.src = q.img;
    img.style.display = "block";

    const opts = document.getElementById("options");
    opts.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.innerText = opt;

        btn.onclick = () => {
            if (i === q.correct) {
                alert("✔️ Correto!");
            } else {
                alert("❌ Errado!");
            }

            index++;

            if (index < questions.length) {
                loadQuestion();
            } else {
                document.getElementById("card").innerHTML =
                "<h2>🎉 Parabéns! Você concluiu a lição de LIBRAS!</h2>";
            }
        };

        opts.appendChild(btn);
    });
}

loadQuestion();
