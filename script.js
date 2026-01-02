document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".icon");

        question.addEventListener("click", () => {

            // Toggle "active" class for smooth animation (optional)
            item.classList.toggle("active");

            // Show / Hide answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});
