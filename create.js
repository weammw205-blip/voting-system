let options = [];

// إضافة خيار
function addOption() {
    let input = document.getElementById("optionInput");
    let value = input.value.trim();

    if (value === "") return;

    options.push(value);
    input.value = "";

    renderOptions();
}

// عرض الخيارات
function renderOptions() {
    let list = document.getElementById("optionsList");
    list.innerHTML = "";

    options.forEach((opt, index) => {
        let li = document.createElement("li");
        li.innerText = opt;

        list.appendChild(li);
    });
}

// حفظ الـ poll
function savePoll() {
    let question = document.getElementById("question").value.trim();

    if (question === "" || options.length < 2) {
        document.getElementById("msg").innerText =
            "Please enter question and at least 2 options";
        return;
    }

    let polls = JSON.parse(localStorage.getItem("polls")) || [];

    let newPoll = {
        id: Date.now(),
        question: question,
        options: options
    };

    polls.push(newPoll);
    localStorage.setItem("polls", JSON.stringify(polls));

    document.getElementById("msg").innerText = "Poll saved successfully!";

    // reset
    document.getElementById("question").value = "";
    options = [];
    renderOptions();
}