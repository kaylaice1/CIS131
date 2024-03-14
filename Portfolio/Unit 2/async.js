let runner1 = false;
let runner2 = false;
let loser = '';

const runner1Go = new Promise((resolve, reject) => {
    setTimeout(() => {
        runner1 = true;
        if (!runner2) {
            loser = 'runner1';
        }
        resolve(true);
    }, Math.random() * 5000);
});

const runner2Go = new Promise((resolve, reject) => {
    setTimeout(() => {
        runner2 = true;
        if (!runner1) {
            loser = 'runner2';
        }
        resolve(true);
    }, Math.random() * 5000);
});

async function race() {
    await Promise.all([runner1Go, runner2Go]);
    return loser ? loser : (Math.random() < 0.5 ? 'runner1' : 'runner2');
}

race().then((loser) => {
    console.log("Loser:", loser);
});
