
document.querySelector(".login-form").addEventListener("click", function(e) {
    e.preventDefault(); // evita reload da página

    document.getElementById("spinner").style.display = "flex";

    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("successBox").style.display = "flex";
    }, 3000); // tempo do carregamento
});


