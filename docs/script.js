const categories = {
    1: ["Question 1.1", "Question 1.2", "Question 1.3"],
    2: ["Question 2.1", "Question 2.2", "Question 2.3"],
    3: ["Question 3.1", "Question 3.2", "Question 3.3"],
    4: ["Question 4.1", "Question 4.2", "Question 4.3"]
};

function getQuestion(category) {
    const questions = categories[category];
    if (questions.length > 0) {
        const index = Math.floor(Math.random() * questions.length);
        const question = questions.splice(index, 1)[0];
        document.getElementById(`question${category}`).textContent = question;
        document.getElementById(`count${category}`).textContent = `Questions left: ${questions.length}`;
    } else {
        document.getElementById(`question${category}`).textContent = "No more questions!";
        document.getElementById(`count${category}`).textContent = "Questions left: 0";
    }
}
