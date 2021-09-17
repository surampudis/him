function topicslist() {
    if (document.getElementById("contentlist").style.display == "none") {
        document.getElementById("contentlist").style.display = "block";
    } else {
        document.getElementById("contentlist").style.display = "none";
    }
}

function benefitlist() {
    if (document.getElementById("traininglist").style.display == "none") {
        document.getElementById("traininglist").style.display = "block";
    } else {
        document.getElementById("traininglist").style.display = "none";
    }
}

function contactButton() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var subject = document.getElementById("subject").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hireintomnc@gmail.com",
        Password: "hireinto@123",
        To: 'hrconnect@himsoftware.com',
        From: "hireintomnc@gmail.com",
        Subject: fname + " " + lname + " sent a new message from website",
        Body: subject,
    }).then(
        message => alert("mail sent successfully. Thak you " + fname + " for your interest. Click on HOME in Menu to return to home page")

    );

}