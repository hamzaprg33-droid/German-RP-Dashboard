const API = "https://DEIN-SERVER:3000"; // HIER DEIN BOT-SERVER

function showTab(tab) {
    ["login","register","verify"].forEach(t =>
        document.getElementById(t).classList.add("hidden")
    );
    document.getElementById(tab).classList.remove("hidden");

    document.getElementById("loginTab")?.classList.remove("active");
    document.getElementById("registerTab")?.classList.remove("active");
    document.getElementById(tab+"Tab")?.classList.add("active");
}

async function register() {
    if (!privacy.checked) return alert("Datenschutz akzeptieren!");

    const res = await fetch(API + "/register", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
            username: regName.value,
            email: regMail.value,
            discordId: regDiscord.value,
            password: regPass.value
        })
    });

    if (res.ok) showTab("verify");
    else alert("Registrierung fehlgeschlagen");
}

async function verify() {
    const res = await fetch(API + "/verify", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
            email: regMail.value,
            code: code.value
        })
    });

    if (res.ok) alert("Erfolgreich! Dashboard folgt.");
    else alert("Code falsch");
}
