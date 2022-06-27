'use strict';

const arr = [1, 2, 3, '123', true];

function iteratorFunc(array) {
    const innerArray = structuredClone(array);
    let counter = 0;

    return {
        value: null,
        done: null,

        setData () {
            this.value = innerArray[counter];
            this.done = counter >= innerArray.length;
            this.counterIncrement();
        },

        next() {
            this.setData();
            return {
                value: this.value,
                done: this.done,
            }
        },

        counterIncrement() {
            counter += 1;
        },
    }
}

const newArray = iteratorFunc(arr);
console.log(newArray.next());
console.log(newArray.next());
console.log(newArray.next());
console.log(newArray.next());
console.log(newArray.next());
console.log(newArray.next());
console.log(newArray.next());
console.log(newArray.next());

