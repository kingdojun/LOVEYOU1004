const wrongAnswers = JSON.parse(localStorage.getItem('middle_wrong') || '[]');

if (!wrongAnswers || wrongAnswers.length === 0) {
  alert("오답이 없습니다!");
  window.location.href = "menu.html";
} else {
  let current = 0;
  let paused = false;

  const deduped = wrongAnswers.filter(
    (v, i, a) => a.findIndex(t => t.word === v.word) === i
  );
  const total = deduped.length;
  const shuffled = deduped.sort(() => Math.random() - 0.5);

  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const countEl = document.getElementById("word-count");
  const pauseBtn = document.getElementById("pause-btn");

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }

  function togglePause() {
    paused = !paused;
    pauseBtn.textContent = paused ? "▶ 재개하기" : "⏸ 일시정지";
    if (!paused) showQuestion();
  }

  function showQuestion() {
    if (paused || current >= total) {
      if (current >= total) {
        alert("복습을 완료했어요! 잘했어요!");
        window.location.href = "menu.html";
      }
      return;
    }

    const q = shuffled[current];
    countEl.textContent = `${current + 1} / ${total}`;
    questionEl.textContent = q.word;
    speak(q.word);

    const options = new Set([q.meaning]);
    while (options.size < 4) {
      const rand = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
      options.add(rand.meaning);
    }

    const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);
    choicesEl.innerHTML = "";

    shuffledOptions.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "choice-btn";
      btn.onclick = () => {
        btn.style.backgroundColor = option === q.meaning ? "lightgreen" : "lightcoral";
        setTimeout(() => {
          current++;
          showQuestion();
        }, 1500);
      };
      choicesEl.appendChild(btn);
    });
  }

  showQuestion();
}
