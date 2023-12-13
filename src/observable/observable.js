export class Observable {
    listeners = [];

    constructor(value) {}

    get() {
        return this.value;
    }

    set(value, updateCallback) {
        updateCallback?.(value);
        if (this.value !== value) {
            this.value = value;
            this.listeners.forEach((l) => l(value));
        }
    }

    subscribe(listener) {
        this.listeners.push(listener);

        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
}
