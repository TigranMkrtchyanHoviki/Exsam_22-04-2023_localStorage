let emile = document.getElementById("emile"),
password = document.getElementById("password")
submit = document.getElementById("submit")

submit.onclick = function () {
     let emileValue = emile.value,
     passwordValue = password.value

     localStorage.setItem("userEmile", emileValue)
     localStorage.setItem("userPwd", passwordValue)
}

