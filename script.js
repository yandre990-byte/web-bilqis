const messages = [
    "Hari buruk bukan bukti kamu gagal. Itu cuma bukti kamu manusia. Aku tetap bangga sama kamu.",
    "Kalau dunia kerasa bising, tarik napas pelan-pelan. Kamu boleh istirahat di sini, di aku.",
    "Kamu nggak sendirian perang sama hari ini. Ada aku, diem-diem doain kamu terus.",
    "Versi kamu hari ini—meski capek dan berantakan—tetap layak dicintai.",
    "Kamu udah sejauh ini. Tolong jangan sepelekan seberapa kuat kamu bertahan.",
    "Pelan aja nggak apa-apa. Yang penting kamu nggak berhenti sayang sama diri sendiri.",
    "Capek boleh, nyerah jangan dulu. Dunia masih butuh senyum kamu yang bikin candu itu."
];

const btn = document.getElementById("btnPesan");
const box = document.getElementById("pesanBox");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    box.textContent = messages[randomIndex];
    
    // kasih efek aktif sebentar
    box.classList.add("active");
    setTimeout(() => {
        box.classList.remove("active");
    }, 700);
});

