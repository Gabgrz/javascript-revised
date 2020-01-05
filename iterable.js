const iterable = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next(){
            step++;

            if(step === 1)
                return {value: 'this', done: false};
            else if(step === 2)
                return {value: 'is', done: false};
            else if(step === 3)
                return {value: 'iterable', done: true};
            }
        };
        return iterator;
    }
};