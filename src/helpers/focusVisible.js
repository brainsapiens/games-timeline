const removeFocusVisible = e => {
    document.documentElement.classList.remove('js-focus-visible');

    const target = e.target;
    target.removeEventListener('blur', removeFocusVisible);
}

const addFocusVisible = el => {
    document.documentElement.classList.add('js-focus-visible');

    el.focus();
    el.addEventListener('blur', removeFocusVisible);
}

export {addFocusVisible};
