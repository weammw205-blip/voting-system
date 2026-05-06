const poll = {
    id: 1,
    question: "Who is your favorite programming language?",
    options: ["JavaScript", "Python", "Java", "C++"]
  };
  
  // مثال بيانات votes مخزنة
  // شكلها: { username: { pollId: "option" } }
  let votes = JSON.parse(localStorage.getItem("votes")) || {};
  
  // حساب النتائج
  function calculateResults() {
    let count = {};
    let total = 0;
  
    poll.options.forEach(opt => {
      count[opt] = 0;
    });
  
    // عد الأصوات
    for (let user in votes) {
      if (votes[user][poll.id]) {
        let choice = votes[user][poll.id];
        count[choice]++;
        total++;
      }
    }
  
    return { count, total };
  }
  
  // عرض النتائج
  function displayResults() {
    document.getElementById("question").innerText = poll.question;
  
    let { count, total } = calculateResults();
    let resultsDiv = document.getElementById("results");
  
    poll.options.forEach(opt => {
      let percentage = total === 0 ? 0 : (count[opt] / total) * 100;
  
      let div = document.createElement("div");
      div.classList.add("result-item");
  
      div.innerHTML = `
        <strong>${opt}</strong> - ${count[opt]} votes (${percentage.toFixed(1)}%)
  
        <div class="bar" style="width:${percentage}%"></div>
      `;
  
      resultsDiv.appendChild(div);
    });
  }
  
  // تشغيل الصفحة
  displayResults();