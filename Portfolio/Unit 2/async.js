let runner1 = false;
let runner2 = false;
let loser = '';

const runner1Go = new Promise((resolve, reject) => {
    setTimeout(() => {
        loser = 'runner1';
        runner1 = true;
        resolve(true);
    }, Math.random() * 5000); // Random timeout under 5 seconds
});

const runner2Go = new Promise((resolve, reject) => {
    setTimeout(() => {
        loser = 'runner2';
        runner2 = true;
        resolve(true);
    }, Math.random() * 5000); // Random timeout under 5 seconds
});

async function race() {
    const results = await Promise.all([runner1Go, runner2Go, loser]);
    return results;
}

race().then((result) => {
    const [runner1Result, runner2Result, loser] = result;
    console.log("Loser:", loser);
});
