import { useEffect, useRef, useState } from 'react';
import { Observable } from './observable';

export const useObservable = <T>(observable: Observable<T>): T => {
    const [value, setValue] = useState(observable.get());
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        setValue(observable.get());
        mounted.current = true;

        const unsubscribe = observable.subscribe((newValue: T) => {
            if (mounted.current) {
                setValue(newValue);
            }
        });

        return (): void => {
            mounted.current = false;
            unsubscribe();
        };
    }, [observable]);

    return value;
};
