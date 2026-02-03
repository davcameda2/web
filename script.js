const uzivatele = {
  "Majitel":     "123456",
  "Spolumajitel":     "123456",
  "manager":     "123456",
  "jan.novak": "123456"
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    if (uzivatele[username] && uzivatele[username] === password) {
        // Uložíme, že je uživatel přihlášený
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", username);

        // === TADY JE TA HLAVNÍ ZMĚNA ===
        window.location.href = "app.html";           // ← sem dej jméno své nové stránky

        // Alternativně můžeš použít replace (mazání historie):
        // window.location.replace("app.html");
    } 
    else {
        alert("Neznámé přihlašovací údaje!");
    }
});

// Odhlášení (tuto funkci můžeš mít i na nové stránce)
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";   // nebo jak se jmenuje login stránka
}