const facts = [
    "Saya suka belajar hal baru di bidang teknologi ",
    "Saya ingin menjadi Software Engineer ",
    "Saya suka ngopi sambil ngoding ",
    "Saya percaya bahwa kesabaran adalah kunci sukses ",
    "Saya berasal dari Kwanyar,Bangkalan,Madura "
];

document.getElementById("btnInfo").addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factElement = document.getElementById("randomFact");
    factElement.textContent = randomFact;
    factElement.style.animation = "fadeIn 1s ease";
});

document.addEventListener("mousemove", (e) => {
  const waves = document.querySelectorAll(".wave");
  waves.forEach((wave, index) => {
    const speed = (index + 1) * 0.02;
    const xPos = e.clientX * speed;
    wave.style.transform = `translateX(${xPos}px)`;
  });
});

const starsContainer = document.querySelector(".stars");
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}