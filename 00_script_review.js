
// 00_script_review.js

let wrongAnswers = JSON.parse(localStorage.getItem("wrongAnswers_middle")) || [];
let currentIndex = 0;
let timer = 5;
let interval = null;
let paused = false;
let correctCount = 0;

const questionNumber = document.getElementById("question-number");
const questionWord = document.getElementById("question-word");
const timerEl = document.getElementById("timer");
const choicesEl = document.getElementById("choices");
const answerDisplay = document.getElementById("answer-display");
const pauseButton = document.getElementById("pause-button");
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
  
  // 목소리 목록 불러오기
  const voices = window.speechSynthesis.getVoices();
  
  // 미국 원어민 목소리 중 하나 선택 (예: 'Samantha' or 'Daniel')
  utter.voice = voices.find(voice => voice.lang === 'en-US' && voice.name.includes('Samantha'));
  
  // 대체 설정
  utter.lang = 'en-US';
  utter.rate = 1;
  utter.pitch = 1;
  
  speechSynthesis.speak(utter);
}

function startQuiz() {
  if (wrongAnswers.length === 0) {
    alert("오답이 없습니다!");
    window.location.href = "00_menu.html";
    return;
  } else if (wrongAnswers.length <= 3) {
    displaySimpleReview();
  } else {
    wrongAnswers = shuffle([...wrongAnswers]);
    displayQuestion();
    startTimer();
  }
}

function displaySimpleReview() {
  questionNumber.textContent = `1 / ${wrongAnswers.length}`;
  const wordObj = wrongAnswers[0];
  questionWord.textContent = wordObj.word;
  speak(wordObj.word);
  timerEl.style.display = "none";

  const div = document.createElement("div");
  div.className = "simple-answer";
  div.innerHTML = `<strong>뜻: ${wordObj.meaning}</strong><br><br><button onclick="window.location.href='00_menu.html'">돌아가기</button>`;
  choicesEl.appendChild(div);
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

function startTimer() {
  timer = 5;
  interval = setInterval(() => {
    if (!paused) {
      timer--;
      timerEl.textContent = `⏱ ${timer}`;
      if (timer === 0) {
        clearInterval(interval);
        handleAnswer(false, "", wrongAnswers[currentIndex].meaning);
      }
    }
  }, 1000);
}

pauseButton.onclick = () => {
  paused = !paused;
  pauseButton.textContent = paused ? "▶ 재생" : "⏸ 일시정지";
};

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

startQuiz();
