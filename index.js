const data = {
  questions: [
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      correct_answer: "Tokyo",
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1950", "1941"],
      correct_answer: "1945",
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: [
        "F. Scott Fitzgerald",
        "Harper Lee",
        "J.K. Rowling",
        "George Orwell",
      ],
      correct_answer: "Harper Lee",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean",
      ],
      correct_answer: "Pacific Ocean",
    },
    {
      question: "Which scientist developed the theory of general relativity?",
      options: [
        "Isaac Newton",
        "Galileo Galilei",
        "Albert Einstein",
        "Stephen Hawking",
      ],
      correct_answer: "Albert Einstein",
    },
    {
      question: "What is the currency of Brazil?",
      options: ["Peso", "Yen", "Real", "Euro"],
      correct_answer: "Real",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correct_answer: "Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      correct_answer: "Au",
    },
    {
      question:
        "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correct_answer: "Venus",
    },
    {
      question: "Who wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
      correct_answer: "George Orwell",
    },
  ],
};

const que = document.querySelector(".que");
const ans = document.querySelectorAll(".ans");

const start = document.querySelector(".btn");
const container = document.querySelector(".container");
start.addEventListener("click", function () {
  container.style.display = "block";
  start.style.display = "none";
  test();
  renderQue();
});

let curQue = 0;
let curScore = 0;
let queNo = document.querySelector(".queNo");

function renderQue() {
  que.textContent = `${curQue + 1}) ${data.questions[curQue].question}`;
  ans[0].textContent = `${data.questions[curQue].options[0]}`;
  ans[1].textContent = `${data.questions[curQue].options[1]}`;
  ans[2].textContent = `${data.questions[curQue].options[2]}`;
  ans[3].textContent = `${data.questions[curQue].options[3]}`;

  queNo.textContent = curQue + 1;
}

const innerFn = function (e) {
  if (e.target.textContent == data.questions[curQue].correct_answer) {
    curScore++;
  }
  if (data.questions.length - 1 == curQue) {
    displayScore();
  }

  curQue++;
  renderQue();
};

function test() {
  ans.forEach((el) => {
    el.removeEventListener("click", innerFn);
    el.addEventListener("click", innerFn);
  });
}

const updateScore = document.querySelector(".update_score");
const scoreEl = document.querySelector(".score");

function displayScore() {
  container.style.display = "none";
  scoreEl.style.display = "block";

  updateScore.textContent = curScore;
}
const playAgain = document.querySelector(".playAagin");
playAgain.addEventListener("click", function () {
  curQue = 0;
  curScore = 0;
  container.style.display = "none";
  start.style.display = "block";
  scoreEl.style.display = "none";
});
