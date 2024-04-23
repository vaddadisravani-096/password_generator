document.addEventListener("DOMContentLoaded", function() {
    const passwordOutput = document.getElementById("passwordOutput");
    const generateBtn = document.getElementById("generateBtn");

    // Function to generate random password
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Event listener for generate password button
    generateBtn.addEventListener("click", function() {
        const passwordLength = 12; // Default password length
        const generatedPassword = generatePassword(passwordLength);
        passwordOutput.value = generatedPassword;
    });
});
