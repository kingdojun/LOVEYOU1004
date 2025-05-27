
function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel(); // 중복 방지
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

let rawData = JSON.parse(localStorage.getItem("wrongWords_middle3000")) || [];
console.log('오답 데이터 수:', rawData.length);
console.log('오답 데이터 수:', rawData.length);
let data = [];
let allMeanings = rawData.map(item => item.meaning);
let current = 0;
let isPaused = false;
let timer = 5;
let interval;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

rawData.forEach(item => {
  let wrongs = allMeanings.filter(m => m !== item.meaning);
  shuffle(wrongs);
  let choices = [item.meaning];
  while (choices.length < 4) {
    const choice = wrongs[Math.floor(Math.random() * wrongs.length)];
    if (!choices.includes(choice)) choices.push(choice);
  }
  shuffle(choices);
  shuffle(choices);
  data.push({ word: item.word, meaning: item.meaning, choices });
});

shuffle(data);

function startTimer() {
  timer = 5;
  document.getElementById("timer").innerText = timer;
  document.getElementById("timer").style.color = "green";
  interval = setInterval(() => {
    if (!isPaused) {
      timer--;
      document.getElementById("timer").innerText = timer;
      document.getElementById("timer").style.color =
        timer >= 4 ? "green" : timer >= 2 ? "orange" : "red";
      if (timer <= 0) {
        clearInterval(interval);
        nextQuestion();
      }
    }
  }, 1000);
}

function togglePause() {
  isPaused = !isPaused;
  document.getElementById("pauseBtn").innerText = isPaused ? "▶️" : "⏸";
}

function showQuestion() {
  if (data.length === 0) {
    document.getElementById("question").innerText = "오답이 없습니다.";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("timer").style.display = "none";
    return;
  }

  const item = data[current];
  document.getElementById("counter").innerText = `${current + 1}/${data.length}`;
  document.getElementById("question").innerText = item.word;
  speakWord(item.word);

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  item.choices.forEach(choice => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.innerText = choice;
    btn.setAttribute("style", "display:block;width:45%;max-width:45%;font-size:15px;padding:10px 12px;box-sizing:border-box;");
    btn.onclick = () => {
      clearInterval(interval);
      if (choice === item.meaning) {
        btn.style.backgroundColor = "#e0f8e0"; btn.style.borderColor = "#2ecc71";
      } else {
        btn.style.backgroundColor = "#fdecea"; btn.style.borderColor = "#e74c3c";
        [...choicesDiv.children].forEach(el => {
          if (el.innerText === item.meaning) {
            el.classList.add("correct");
          }
        });
      }
      setTimeout(nextQuestion, 1000);
    };
    choicesDiv.appendChild(btn);
  });

  startTimer();
}

function nextQuestion() {
  current = (current + 1) % data.length;
  
  // reset styles
  const choicesDiv = document.getElementById("choices");
  if (choicesDiv) {
    [...choicesDiv.children].forEach(el => {
      el.classList.remove("correct", "incorrect");
      el.style.backgroundColor = "";
      el.style.borderColor = "";
    });
  }
  showQuestion();
}


  // reset styles
  const choicesDiv = document.getElementById("choices");
  if (choicesDiv) {
    [...choicesDiv.children].forEach(el => {
      el.classList.remove("correct", "incorrect");
      el.style.backgroundColor = "";
      el.style.borderColor = "";
    });
  }
  showQuestion();
