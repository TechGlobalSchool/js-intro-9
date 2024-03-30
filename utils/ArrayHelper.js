export class ArrayHelper{
    static getMiddle(arr) {
        if(arr.length % 2 === 0) {
            const middleIndex = arr.length / 2;
            return [arr[middleIndex - 1], arr[middleIndex]];
        }
        else {
            const middleIndex = (arr.length - 1) / 2;
            return arr[middleIndex];
        }
    }


    static sum(arr) {
        return arr.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    }
}