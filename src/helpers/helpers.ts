export const helper = {
    createMonsterID: (id: number): string => `monster-${id}`,
    getRandomNumberButOne(toBeSkipped: number): number {
        let randomNumber = Math.ceil(Math.random() * 5);
        if(toBeSkipped === randomNumber) {
            randomNumber = this.getRandomNumberButOne(toBeSkipped)
        }
        return randomNumber
    }
}