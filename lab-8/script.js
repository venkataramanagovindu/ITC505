function validateForm() {
    const firstName = sanitizeInput(document.getElementById("firstName").value);
    const lastName = sanitizeInput(document.getElementById("lastName").value);
    const email = sanitizeInput(document.getElementById("email").value);
    const password = sanitizeInput(document.getElementById("password").value);
    const confirmPassword = sanitizeInput(document.getElementById("confirmPassword").value);


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

function sanitizeInput(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML.replace(/['";=<>]/g, ''); // Remove characters that are typically used in SQL injection
}

function encodeHTML(str) {
    return str.replace(/[\u00A0-\u9999<>&]/gim, function(i) {
       return '&#' + i.charCodeAt(0) + ';';
    });
}
