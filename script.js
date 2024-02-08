const heart = document.getElementById("heart");
const letter = document.getElementById("letter");

heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    letter.classList.toggle("active");
});