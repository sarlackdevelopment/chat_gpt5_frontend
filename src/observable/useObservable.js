import { useEffect, useRef, useState } from 'react';
import { Observable } from './observable';

export const useObservable = (observable) => {
    const [value, setValue] = useState(observable.get());
    const mounted = useRef(false);

    useEffect(() => {
        setValue(observable.get());
        mounted.current = true;

        const unsubscribe = observable.subscribe((newValue) => {
            if (mounted.current) {
                setValue(newValue);
            }
        });

        return () => {
            mounted.current = false;
            unsubscribe();
        };
    }, [observable]);

    return value;
};
