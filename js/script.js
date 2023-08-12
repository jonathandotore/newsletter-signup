/* E-mail validation */
document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim(); // Remove espaços em branco no início e fim

    let valid = document.getElementById("valid");
    let invalid = document.getElementById("invalid");
    let input = document.getElementById("email")
    console.log(input)

    if (validarEmail(email)) {
        if (invalid.classList.contains = "invalid" || input.classList.contains("inputFail") || input.va) {
            invalid.classList.remove("invalid")
            input.classList.remove("inputFail")
            valid.classList.add("success")
            input.classList.add("inputSuccess")
        }
    } else {
        invalid.classList.add("invalid")
        input.classList.add("inputFail")

    }
});

function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
