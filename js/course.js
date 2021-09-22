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

    let fnameElement = document.getElementById("fname").value;
    var lnameElement = document.getElementById("lname").value;
    var subjectElement = document.getElementById("subject").value;
    if (fnameElement == "") {
        document.getElementById('textMessage').textContent = "please provide your Firstname"
    } else if (lnameElement == "") {
        document.getElementById('textMessage').textContent = "please provide your Lastname"
    } else if (subjectElement == "") {
        document.getElementById('textMessage').textContent = "please enter your query"
    } else {


        Email.send({
            Host: "smtp.gmail.com",
            Username: "hireintomnc@gmail.com",
            Password: "hireinto@123",
            To: 'hrconnect@himsoftware.com',
            From: "hireintomnc@gmail.com",
            Subject: fnameElement + " " + lnameElement + " sent a new message from website",
            Body: subjectElement,
        }).then(
            document.getElementById('textMessage').textContent = "mail sent successfully. Thak you " + fnameElement + " for your interest. Click on HOME in Menu to return to home page", document.getElementById('contactForm').reset()

        );
    }

}