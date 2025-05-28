const quizData = JSON.parse(localStorage.getItem('wrongAnswers_middle') || '[]');
if (quizData.length === 0) {
  alert('오답이 없습니다!');
  window.location.href = 'menu.html';
} else {
  let currentQuestion = 0;
  let isPaused = false;
  const totalQuestions = quizData.length;
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const countEl = document.getElementById("word-count");
  const pauseBtn = document.getElementById("pause-btn");

  const shuffled = quizData.sort(() => 0.5 - Math.random());

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }

  function showQuestion() {
    if (currentQuestion >= totalQuestions) {
      alert('복습을 완료했어요! 잘했어요!');
      window.location.href = 'menu.html';
      return;
    }

    const current = shuffled[currentQuestion];
    countEl.textContent = `${currentQuestion + 1} / ${totalQuestions}`;
    questionEl.textContent = current.word;
    speak(current.word);

    const options = [current.meaning];
    while (options.length < 4) {
      const random = quizData[Math.floor(Math.random() * quizData.length)];
      if (!options.includes(random.meaning)) {
        options.push(random.meaning);
      }
    }

    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    choicesEl.innerHTML = '';
    shuffledOptions.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "choice-btn";
      btn.onclick = () => {
        btn.style.backgroundColor = choice === current.meaning ? 'lightgreen' : 'lightcoral';
        setTimeout(() => {
          currentQuestion++;
          showQuestion();
        }, 1500);
      };
      choicesEl.appendChild(btn);
    });
  }

  function togglePause() {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? '▶ 재개하기' : '⏸ 일시정지';
    if (!isPaused) showQuestion();
  }

  showQuestion();
}
