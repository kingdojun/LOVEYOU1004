
let quiz = [];
let current = 0;
let score = 0;
let paused = false;
let timer;
let wrongAnswers = [];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function pickRandomQuizItems(data, count) {
  return shuffleArray([...data]).slice(0, count);
}

function speakWord(word) {
  try {
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = 'en-US';
    utter.rate = 0.9;
    speechSynthesis.speak(utter);
  } catch (e) {
    console.warn("TTS error", e);
  }
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
    const randomMeaning = quizData[Math.floor(Math.random() * quizData.length)].meaning;
    if (!choices.includes(randomMeaning)) choices.push(randomMeaning);
  }
  const shuffledChoices = shuffleArray(choices);

  const container = document.getElementById("choices");
  container.innerHTML = "";

  shuffledChoices.forEach(choiceText => {
    const btn = document.createElement("button");
    btn.setAttribute("tabindex", "-1");
    btn.textContent = choiceText;
    btn.className = "choice-btn";

    btn.onclick = () => {
      btn.blur();
      clearInterval(timer);
      const allBtns = document.querySelectorAll(".choice-btn");
      allBtns.forEach(b => { b.disabled = true; b.blur(); });

      if (btn.textContent === q.meaning) {
        btn.style.backgroundColor = "#A5D6A7";
        handleAnswer(true);
      } else {
        btn.style.backgroundColor = "#EF9A9A";
        const correctBtn = Array.from(allBtns).find(b => b.textContent === q.meaning);
        if (correctBtn) correctBtn.style.backgroundColor = "#A5D6A7";
        wrongAnswers.push(quiz[current]);
        localStorage.setItem("middle_wrong", JSON.stringify(wrongAnswers));
        handleAnswer(false);
      }
    };
    container.appendChild(btn);
  });

  startCountdown();
}

function handleAnswer(correct) {
  if (correct) score++;
  else {
    wrongAnswers.push(quiz[current]);
    localStorage.setItem("middle_wrong", JSON.stringify(wrongAnswers));
  }
  setTimeout(() => {
    current++;
    showQuestion();
  }, 100);
}

function startCountdown() {
  let count = 5;
  const display = document.getElementById("question-count");
  clearInterval(timer);
  timer = setInterval(() => {
    if (paused) return;
    count--;
    display.textContent = `${current + 1} / ${quiz.length} ⏳ ${count}`;
    if (count === 0) {
      clearInterval(timer);
      const correctBtn = Array.from(document.querySelectorAll(".choice-btn")).find(b => b.textContent === quiz[current].meaning);
      if (correctBtn) correctBtn.style.backgroundColor = '#A5D6A7';
      setTimeout(() => {
        wrongAnswers.push(quiz[current]);
        localStorage.setItem("middle_wrong", JSON.stringify(wrongAnswers));
        handleAnswer(false);
      }, 1000);
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
