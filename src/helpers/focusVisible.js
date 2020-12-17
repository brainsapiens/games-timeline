const removeFocusVisible = e => {
    const html = document.documentElement;
    html.classList.remove('js-focus-visible');

    const target = e.target;
    target.removeEventListener('blur', removeFocusVisible);
}

const addFocusVisible = el => {
    const html = document.documentElement;
    html.classList.add('js-focus-visible');

    el.focus();
    el.addEventListener('blur', removeFocusVisible);
}

export {addFocusVisible};
