const removeFocusVisible = e => {
    document.documentElement.classList.remove('js-focus-visible');

    const target = e.target;
    target.removeEventListener('blur', removeFocusVisible);
}

const addFocusVisible = link => {
    document.documentElement.classList.add('js-focus-visible');

    link.focus();
    link.addEventListener('blur', removeFocusVisible);
}

export {addFocusVisible};
