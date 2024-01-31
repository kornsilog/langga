function validateCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var correctUsername = "yanyan"; // Replace with the correct username
    var correctPassword = "05082000"; // Replace with the correct password

    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("result").innerHTML = "Try again hon. Isip ka ng ibang username and password.";
    } else if (username === correctUsername && password === correctPassword) {
        document.getElementById("result").innerHTML = "Yey! tama ka langga. Redirecting...";

        // Redirect after 3 seconds
        setTimeout(function() {
            window.location.href = "index3.html";  // Replace with your desired URL for successful login
        }, 3000);
    } else {
        document.getElementById("result").innerHTML = "Try again hon. Isip ka ng ibang username and password.";
    }
}
