type Listener<T> = (val: T) => void;
type Unsubscriber = () => void;

export class Observable<T> {
    private listeners: Listener<T>[] = [];

    constructor(private value: T) {}

    get(): T {
        return this.value;
    }

    set(value: T, updateCallback?: (val: T) => void): void {
        updateCallback?.(value);
        if (this.value !== value) {
            this.value = value;
            this.listeners.forEach((l) => l(value));
        }
    }

    subscribe(listener: Listener<T>): Unsubscriber {
        this.listeners.push(listener);

        return (): void => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
}
