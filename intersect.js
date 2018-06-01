const callbacks = new Map();
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (callbacks.has(entry.target)) {
            callbacks.get(entry.target)(entry);
        }
    });
}, {
    threshold: 0
});

export default {
    inserted(el, {value}) {
        callbacks.set(el, value);
        observer.observe(el);
    }
};
