export function minusSeconds(number) {
    return {
        type: "MINUSSECONDS",
        payload: number
    };
}

export function minusMinutes(number) {
    return {
        type: "MINUSMINUTES",
        payload: number
    };
}

export function minusHours(number) {
    return {
        type: "MINUSHOURS",
        payload: number
    };
}