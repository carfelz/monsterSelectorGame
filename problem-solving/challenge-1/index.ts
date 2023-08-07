export type returnType = {
    positives: string;
    negative: string;
    zeros: string;
}
export const numbersFractionCalculator = (numbers: number[]): returnType => {
    let positives: number = 0;
    let negatives: number = 0;
    let zeros: number = 0;
    const length: number = numbers.length

    for (let num of numbers) {
        if (num === 0) {
            zeros += 1
        } else if (num > 0) {
            positives += 1;
        } else if (num < 0) {
            negatives += 1
        }
    }

    return {
        positives: (positives / length).toFixed(6),
        zeros: (zeros / length).toFixed(6),
        negative: (negatives / length).toFixed(6)
    }
};
