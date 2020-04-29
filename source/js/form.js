'use strict';

{
  const TEL_LENGTH = 11;
  const TEL_INPUT_VALUE = '+7';

  const form = document.querySelector('.form');
  const formTelInput = form.querySelector('#tel');
  const formEmailInput = form.querySelector('#email');
  const submitButton = form.querySelector('.form__button');

  const setInputValue = (string, input) => {
    input.value += string;
  }

  const onTelInputFocusSetValue = () => {
    if (formTelInput.value.length < 2) {
      setInputValue(TEL_INPUT_VALUE, formTelInput)
    }
  }

  const onEmailInputChange = () => {
    if (!formEmailInput.validity.valid) {
      formEmailInput.classList.add('form__input--invalid');
    }
  }

  const onTelInputChange = () => {
    if (!formTelInput.validity.valid) {
      formTelInput.classList.add('form__input--invalid');
    }
  };


  formTelInput.addEventListener('change', onTelInputChange);
  formEmailInput.addEventListener('change', onEmailInputChange);
  formTelInput.addEventListener('focus', onTelInputFocusSetValue);















}
