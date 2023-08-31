document.addEventListener('DOMContentLoaded', function() {
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const verifyButton = document.getElementById('verifyButton');
    const refreshButton = document.getElementById('refreshButton');

    refreshCaptcha();

    refreshButton.addEventListener('click', refreshCaptcha);

    verifyButton.addEventListener('click', function() {
        const userInput = captchaInput.value;
        const actualCaptcha = captchaText.textContent;
        if (userInput === actualCaptcha) {
            alert('CAPTCHA verification successful!');
        } else {
            alert('CAPTCHA verification failed.');
        }
        refreshCaptcha();
    });

    function refreshCaptcha() {
        const randomText = generateRandomString(5);
        captchaText.textContent = randomText;
        captchaInput.value = '';
    }

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
});