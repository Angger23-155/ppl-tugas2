const facts = [
    "Saya suka belajar hal baru di bidang teknologi 💻",
    "Saya ingin menjadi Software Engineer 🔧",
    "Saya suka ngopi sambil ngoding ☕",
    "Saya percaya bahwa kesabaran adalah kunci sukses 🔑",
    "Saya berasal dari Universitas Trunojoyo Madura 🎓"
];

document.getElementById("btnInfo").addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factElement = document.getElementById("randomFact");
    factElement.textContent = randomFact;
    factElement.style.animation = "fadeIn 1s ease";
});
