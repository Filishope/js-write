export default class Middleware {
    constructor() {
        this.fns = [];
    }

    use(fn) {
        if (typeof fn !== 'function') {
            throw new Error('middleware must be a function');
        }
        this.fns.push(fn);
        return this;
    }

    async go(ctx) {
        function createFun(fn, preNext) {
            return async () => {
                await fn(ctx, preNext);
            };
        }
        let next = async () => {
            return Promise.resolve();
        };
        let fn;
        while (this.fns.length){
            fn = this.fns.pop();
            next = createFun(fn, next);
        }
        await next();
    }
}
