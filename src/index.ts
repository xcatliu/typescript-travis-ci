document.getElementById('button').addEventListener('click', async () => {
    let sum = await import(/* webpackChunkName: "sum" */ './sum');
    alert(sum.default(1, 2));
});
