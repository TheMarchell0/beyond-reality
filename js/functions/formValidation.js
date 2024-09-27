export function formValidation(form) {
    const inputs = form.querySelectorAll('.js-input-wrapper');
    const submitButton = form.querySelector('.js-submit-button');
    const passwordInput = form.querySelector('.js-origin-password');
    const repeatPasswordInput = form.querySelector('.js-repeat-password');

    inputs.forEach((input) => {
        const field = input.querySelector('.js-input');

        field.addEventListener('input', () => {
            validateInput(input);
        });

        field.addEventListener('change', () => {
            field.classList.add('touched');
        });
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        inputs.forEach(input => {
            validateInput(input);
        });

        checkAllFieldsValid();
    });


    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validateInput(input) {
        const isEmailField = input.classList.contains('js-email-input');
        const isPasswordRepeatField = input.classList.contains('js-password-input');
        const field = input.querySelector('.js-input');
        const value = field.value.trim();
        const isEmpty = value === '';

        input.classList.remove('error', 'email-error', 'password-error');

        if (isEmpty) {
            input.classList.add('error');
        } else {
            field.classList.add('touched');

            if (isEmailField && !validateEmail(value)) {
                input.classList.add('error', 'email-error');
            }

            if (isPasswordRepeatField && repeatPasswordInput) {
                if (passwordInput.value !== repeatPasswordInput.value && repeatPasswordInput.classList.contains('touched')) {
                    repeatPasswordInput.closest('.js-input-wrapper').classList.add('error', 'password-error');
                }
                else {
                    repeatPasswordInput.closest('.js-input-wrapper').classList.remove('error', 'password-error');
                }
            }
        }
    }

    function checkAllFieldsValid() {
        let allValid = Array.from(inputs).every((input) => {
            return !input.classList.contains('error') && !input.classList.contains('email-error');
        });

        if (allValid) {
            alert('Success!');
            clearFormFields();
            // TODO: create send form backend functional
        }
    }

    function clearFormFields() {
        inputs.forEach((input) => {
            const field = input.querySelector('.js-input');
            field.value = '';
            field.classList.remove('touched');
        });
    }
}
