(async () => {
	console.log(Date.now());
	await setTimeout(() => {}, 2000);
	console.log(Date.now());
})();
