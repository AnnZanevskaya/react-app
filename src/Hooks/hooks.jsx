import { useCallback, useState } from "react";

export const useToggle = (initialValue = false) => {
    const [flag, setFlag] = useState(initialValue);

    const toggle = useCallback((value) => {
        value === undefined ? setFlag(!flag) : setFlag(value);
    }, [flag])

    return [flag, toggle];
}
