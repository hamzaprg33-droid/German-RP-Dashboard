function showTab(tab) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("register").classList.add("hidden");

    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registerTab").classList.remove("active");

    document.getElementById(tab).classList.remove("hidden");
    document.getElementById(tab + "Tab").classList.add("active");
}
