const polls = JSON.parse(localStorage.getItem("polls")) || [
  {
    id: 1,
    question: "Who is your favorite programming language?"
  },
  {
    id: 2,
    question: "Which study method do you prefer?"
  },
  {
    id: 3,
    question: "Do you support online voting systems?"
  }
];

function displayPolls() {
  const pollList = document.getElementById("pollList");
  pollList.innerHTML = "";

  polls.forEach(poll => {
    const div = document.createElement("div");
    div.classList.add("poll");

    div.innerHTML = `
      <h3>${poll.question}</h3>
      <button onclick="openPoll(${poll.id})">Open Poll</button>
    `;

    pollList.appendChild(div);
  });
}

function openPoll(id) {
  localStorage.setItem("selectedPollId", id);
  window.location.href = "vote.html";
}

displayPolls();