function validateForm() {
    const firstName = encodeHTML(document.getElementById("firstName").value);
    const lastName = encodeHTML(document.getElementById("lastName").value);
    const email = encodeHTML(document.getElementById("email").value);
    const password = encodeHTML(document.getElementById("password").value);
    const confirmPassword = encodeHTML(document.getElementById("confirmPassword").value);
    
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    debugger;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields must be filled out");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function encodeHTML(str) {
    let x =  str.replace(/[\u00A0-\u9999<>&]/gim, function(i) {
       return '&#' + i.charCodeAt(0) + ';';
    });
    return x;
}
