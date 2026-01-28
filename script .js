async function askAI() {
  const question = document.getElementById("questionInput").value.trim();
  const loader = document.getElementById("loader");
  const answerBox = document.getElementById("answerBox");
  const answerText = document.getElementById("answerText");

  if (!question) {
    alert("Please type a question");
    return;
  }

  loader.style.display = "block";
  answerBox.style.display = "none";
  answerText.innerText = "";

  try {
    const response = await fetch("/api/webhook/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: question })
    });

    const data = await response.json();
    answerText.innerText = data.answer || "No answer received.";
    answerBox.style.display = "block";

  } catch (error) {
    answerText.innerText = "Error connecting to AI service.";
    answerBox.style.display = "block";
  }

  loader.style.display = "none";
}
