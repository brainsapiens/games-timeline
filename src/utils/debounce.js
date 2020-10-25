// https://learn.javascript.ru/task/debounce
export default function debounce (f, ms) {
    ms = ms || 100;

    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}