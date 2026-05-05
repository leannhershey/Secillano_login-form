function handleLogin(event) {
    event.preventDefault();

    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const rememberMe = document.getElementById('rememberMe');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    usernameError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';
    successMessage.style.display = 'none';

    let isValid = true;

    if (usernameValue === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    }

    if (passwordValue === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    successMessage.textContent = 'Login successful.';
    successMessage.style.display = 'block';
    form.reset();
    rememberMe.checked = true;
}