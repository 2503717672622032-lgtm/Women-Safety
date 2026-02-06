function makeCall() {
    let num = document.getElementById("number").value;

    if (num === "") {
        alert("Please enter emergency number!");
        return;
    }

    // THIS LINE STARTS THE CALL
    window.location.href = "tel:" + num;
}