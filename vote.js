
const poll = {
    id: 1,
    question: "Who is your favorite programming language?",
    options: ["JavaScript", "Python", "Java", "C++"]
};


function loadPoll() {
    document.getElementById("question").innerText = poll.question;

    let optionsDiv = document.getElementById("options");

    poll.options.forEach((opt, index) => {
        let div = document.createElement("div");
        div.classList.add("option");

        div.innerHTML = `
      <input type="radio" name="vote" value="${opt}" id="opt${index}">
      <label for="opt${index}">${opt}</label>
    `;

        optionsDiv.appendChild(div);
    });
}


function submitVote() {
    let selected = document.querySelector('input[name="vote"]:checked');

    if (!selected) {
        document.getElementById("msg").innerText = "Please select an option!";
        return;
    }

    let user = localStorage.getItem("currentUser");

    if (!user) {
        user = "guest";
    }

    let votes = JSON.parse(localStorage.getItem("votes")) || {};


    if (votes[user] && votes[user][poll.id]) {
        document.getElementById("msg").innerText = "You already voted!";
        return;
    }

    if (!votes[user]) {
        votes[user] = {};
    }

    votes[user][poll.id] = selected.value;

    localStorage.setItem("votes", JSON.stringify(votes));

    document.getElementById("msg").innerText = "Vote saved successfully!";
}


loadPoll();