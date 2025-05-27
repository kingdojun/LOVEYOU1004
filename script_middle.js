
let quiz = [];
let current = 0;
let score = 0;
let paused = false;
let timer;
let shuffled = [];
let wrongAnswers = [];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function pickRandomQuizItems(data, count) {
  const shuffled = shuffleArray([...data]);
  return shuffled.slice(0, count);
}

function speakWord(word) {
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  speechSynthesis.speak(utter);
}

function showQuestion() {
  if (current >= quiz.length) {
    alert(`퀴즈 종료! 점수: ${score}/${quiz.length}`);
    localStorage.setItem("middle_wrong", JSON.stringify(wrongAnswers));
    location.href = 'menu.html';
    return;
  }

  const q = quiz[current];
  document.getElementById("question").textContent = q.word;
  document.getElementById("question-count").textContent = `${current + 1} / ${quiz.length}`;
  speakWord(q.word);

  const choices = [q.meaning];
  while (choices.length < 4) {
    const random = quizData[Math.floor(Math.random() * quizData.length)].meaning;
    if (!choices.includes(random)) choices.push(random);
  }
  const shuffledChoices = shuffleArray(choices);

  const choiceContainer = document.getElementById("choices");
  choiceContainer.innerHTML = "";
  shuffledChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.onclick = () => handleAnswer(choice === q.meaning);
    choiceContainer.appendChild(btn);
  });

  startCountdown();
}

function handleAnswer(correct) {
  clearTimeout(timer);
  if (correct) {
    score++;
  } else {
    wrongAnswers.push(quiz[current]);
  }
  setTimeout(() => {
    current++;
    showQuestion();
  }, 1000);
}

function startCountdown() {
  let count = 5;
  const countDisplay = document.getElementById("question-count");
  timer = setInterval(() => {
    if (paused) return;
    if (count === 1) {
      clearInterval(timer);
      handleAnswer(false);
    } else {
      count--;
      countDisplay.textContent = `${current + 1} / ${quiz.length} ⏳ ${count}`;
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  quiz = pickRandomQuizItems(quizData, 300);
  document.getElementById("pause-button").onclick = () => {
    paused = !paused;
    document.getElementById("pause-button").textContent = paused ? "▶ 재개" : "⏸ 일시정지";
  };
  showQuestion();
});
