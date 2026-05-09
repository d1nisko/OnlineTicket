// app.js — головний скрипт застосунку OnlineTicket
// Точка входу клієнтської частини

console.log("Skeleton initialized successfully.");
console.log("OnlineTicket — система онлайн-замовлення квитків на транспорт.");

// Виводимо повідомлення на сторінці
document.addEventListener("DOMContentLoaded", function() {
    const messageEl = document.getElementById("init-message");
    if (messageEl) {
        messageEl.textContent = "Каркас застосунку готовий до подальшої розробки.";
    }

    // Виводимо поточний час
    function updateTime() {
        const timeEl = document.getElementById("current-time");
        if (timeEl) {
            const now = new Date();
            timeEl.textContent = now.toLocaleString("uk-UA");
        }
    }

    updateTime();
    setInterval(updateTime, 1000);
});
