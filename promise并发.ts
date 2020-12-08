class Scheduler {
    private queue: any[]
    private maxCount: number
    private runCounts: number
    constructor() {
        this.queue = [];
        this.maxCount = 2;
        this.runCounts = 0;
    }
    add(promiseCreator: () => Promise<void>) {
        this.queue.push(promiseCreator);
    }
    taskStart() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }
    request() {
        if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
            return;
        }
        this.runCounts++;

        this.queue.shift()().then(() => {
            this.runCounts--;
            this.request();
        });
    }
}

const timeout = (time: number) => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler();

const addTask = (time:number, order:string) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}


addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
scheduler.taskStart()
// 2
// 3
// 1
// 4
