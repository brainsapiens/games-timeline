const scrollToTop = () => {
    const {history} = window;

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
};

export default scrollToTop;
