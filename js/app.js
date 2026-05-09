// app.js — головний скрипт застосунку OnlineTicket
// Точка входу клієнтської частини

console.log("Skeleton initialized successfully.");
console.log("OnlineTicket — система онлайн-замовлення квитків на транспорт.");

// Виводимо повідомлення на сторінці
document.addEventListener("DOMContentLoaded", function() {
    const messageEl = document.getElementById("init-message");
    if (messageEl) {
        messageEl.textContent = "Каркас працює.";
    }
});
