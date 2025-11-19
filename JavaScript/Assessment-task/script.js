const quiz = [
  {
    q: "CSS stands for ?",
    options: ["Cascading Style Sheet", "Cascade Styling Sheet", "Cascades Sheet Styling", "Cascading Styling Sheets"],
    answer: 0
  },
  {
    q: "HTML stands for ?",
    options: ["HyperText Markup Language", "HyperTask Markup Language", "HyperText Makeup Language", "Hyper Task Makeup Language"],
    answer: 0
  },
  {
    q: "JS stands for ?",
    options: ["Java Style", "Java Sheet", "Java Styling", "Java Script"],
    answer: 3
  },
  {
    q: "ROM stands for ?",
    options: ["Read only memory", "Random access memory", "Read ones memory", "Reads only memory"],
    answer: 0
  },
  {
    q: "RAM stands for ?",
    options: ["Read only memory", "Random access memory", "Read access memory", "Random any memory"],
    answer: 1
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("result").innerHTML = "";
  const qObj = quiz[index];
  document.getElementById("question").innerText = (index + 1) + ". " + qObj.q;

  const optBox = document.getElementById("options");
  optBox.innerHTML = "";

  qObj.options.forEach((opt, i) => {
    let div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;

    div.onclick = () => {
      if (i === qObj.answer) {
        div.classList.add("correct");
        score++;
      } else {
        div.classList.add("wrong");
      }

      const all = document.querySelectorAll('.option');
      all.forEach(o => o.style.pointerEvents = "none");

      all[qObj.answer].classList.add("correct");
    };

    optBox.appendChild(div);
  });
}

document.getElementById("nextBtn").onclick = () => {
  if (index < quiz.length - 1) {
    index++;
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerHTML = `Your Score: ${score} / ${quiz.length}`;
    document.getElementById("nextBtn").style.display = "none";
  }
};

loadQuestion();




  