export function random(min: number, max: number, float: boolean = false): number {
    const random = Math.random();
    const range = max - min;
    const output = random * range + min;
    if (float) {
        return Math.round(output);
    }
    return output;
}
