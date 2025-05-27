
let currentQuestion = 0;
let score = 0;
let totalQuestions = 0;
let quizData = [];
let isPaused = false;

fetch("data_middle.js")
  .then(response => response.text())
  .then(data => {
    eval(data);
    startQuiz();
  });

function startQuiz() {
  quizData = shuffle(quizData).slice(0, 300);
  totalQuestions = quizData.length;
  showQuestion();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showQuestion() {
  if (currentQuestion >= totalQuestions) {
    alert("퀴즈가 끝났습니다!");
    window.location.href = "menu.html";
    return;
  }

  const wordObj = quizData[currentQuestion];
  const question = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");
  const count = document.getElementById("count");

  question.textContent = wordObj.word;
  count.textContent = `${currentQuestion + 1} / ${totalQuestions}`;
  speak(wordObj.word);

  const answers = shuffle(generateChoices(wordObj.meaning));
  choicesContainer.innerHTML = "";

  answers.forEach(choice => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = choice;
    button.onclick = () => handleAnswer(choice, wordObj.meaning);
    choicesContainer.appendChild(button);
  });

  if (!isPaused) {
    setTimeout(() => {
      showCorrectAnswer(wordObj.meaning);
      setTimeout(() => {
        currentQuestion++;
        showQuestion();
      }, 1000);
    }, 5000);
  }
}

function generateChoices(correct) {
  const pool = quizData.map(item => item.meaning);
  const unique = [...new Set(pool.filter(m => m !== correct))];
  const choices = unique.slice(0, 3);
  choices.push(correct);
  return shuffle(choices);
}

function handleAnswer(selected, correct) {
  const buttons = document.querySelectorAll(".choice-button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
    event.target.style.backgroundColor = "#4CAF50";
  } else {
    event.target.style.backgroundColor = "#f44336";
    buttons.forEach(btn => {
      if (btn.textContent === correct) btn.style.backgroundColor = "#4CAF50";
    });
  }

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1200);
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

document.getElementById("pauseBtn").addEventListener("click", () => {
  isPaused = !isPaused;
  const btn = document.getElementById("pauseBtn");
  btn.textContent = isPaused ? "▶️ 다시시작" : "⏸ 일시정지";
  if (!isPaused) showQuestion();
});
