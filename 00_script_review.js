// 00_script_review.js

let wrongAnswers = JSON.parse(localStorage.getItem("wrongAnswers_middle")) || [];
let currentIndex = 0;
let timer = 5;
let interval = null;
let correctCount = 0;

const questionNumber = document.getElementById("question-number");
const questionWord = document.getElementById("question-word");
const timerEl = document.getElementById("timer");
const choicesEl = document.getElementById("choices");
const answerDisplay = document.getElementById("answer-display");
const retryButton = document.getElementById("retry-button");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  speechSynthesis.speak(utter);
}

function startQuiz() {
  if (wrongAnswers.length === 0) {
    alert("오답이 없습니다!");
    window.location.href = "00_menu.html";
    return;
  } else {
    wrongAnswers = shuffle([...wrongAnswers]);
    displayQuestion();
    startTimer();
  }
}

function displayQuestion() {
  const wordObj = wrongAnswers[currentIndex];
  questionNumber.textContent = `${currentIndex + 1} / ${wrongAnswers.length}`;
  questionWord.textContent = wordObj.word;
  speak(wordObj.word);
  timerEl.textContent = `⏱ 5`;
  answerDisplay.style.display = "none";
  choicesEl.innerHTML = "";

  const correct = wordObj.meaning;
  const options = shuffle([correct, ...getRandomMeanings(correct)]);

  options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-button";
    btn.textContent = option;
    btn.onclick = () => handleAnswer(option === correct, option, correct);
    choicesEl.appendChild(btn);
  });
}

function getRandomMeanings(exclude) {
  const allMeanings = quizData.map(q => q.meaning).filter(m => m !== exclude);
  return shuffle(allMeanings).slice(0, 3);
}

function handleAnswer(isCorrect, selected, correct) {
  clearInterval(interval);
  const buttons = document.querySelectorAll(".choice-button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    }
    if (!isCorrect && btn.textContent === selected) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
  });

  if (isCorrect) correctCount++;

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < wrongAnswers.length) {
      displayQuestion();
      startTimer();
    } else {
      showRetry();
    }
  }, 1500);
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuestion();
    clearInterval(interval);
    startTimer();
  }
}

function nextQuestion() {
  if (currentIndex < wrongAnswers.length - 1) {
    currentIndex++;
    displayQuestion();
    clearInterval(interval);
    startTimer();
  }
}

function startTimer() {
  timer = 5;
  timerEl.textContent = `⏱ ${timer}`;
  interval = setInterval(() => {
    timer--;
    timerEl.textContent = `⏱ ${timer}`;
    if (timer === 0) {
      clearInterval(interval);
      handleAnswer(false, "", wrongAnswers[currentIndex].meaning);
    }
  }, 1000);
}

retryButton.onclick = () => {
  currentIndex = 0;
  correctCount = 0;
  retryButton.style.display = "none";
  startQuiz();
};

function showRetry() {
  questionWord.textContent = "🎉 복습 완료!";
  questionNumber.textContent = `맞은 개수: ${correctCount} / ${wrongAnswers.length}`;
  choicesEl.innerHTML = "";
  timerEl.style.display = "none";
  retryButton.style.display = "block";
}

function clearWrongAnswers() {
  if (confirm("정말로 오답노트를 지우시겠습니까?")) {
    localStorage.removeItem("wrongAnswers_middle");
    alert("오답노트가 삭제되었습니다.");
    window.location.href = "00_menu.html";
  }
}

startQuiz();
