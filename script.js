// //your JS code here. If required.

const output = document.getElementById('output');
const loading = document.getElementById('loading');
// const row = output.insertRow(-1);
// const col1 = row.insertCell(0);
// const col2 = row.insertCell(1);
// col1.innerText = "Loading...";
// col2.innerText = "Loading..."; 

const promises = [];

for(let i=0; i<3; i++){
	promises.push(new Promise(function(resolve, reject) {

		let randomNubmer = Math.floor(Math.random() * 3) +1;
      
		setTimeout(function () {
			resolve(randomNubmer);
		}, ((i+1) *1000));
	}));
}
  
Promise.all(promises).then(function (results) {
	let totalTime = results.reduce(function (a, b) {
		return a+b;
	}, 0);
	
	loading.remove();
	let i = 0;
	for(i=0; i < results.length; i++) {
		const row = output.insertRow(-1);
		const col1 = row.insertCell(0);
		const col2 = row.insertCell(1);
		col1.innerText = "Promise " + (i+1);
		col2.innerText = parseInt(results[i]);
	}

	if(i === 3){
		const row = output.insertRow(-1);
		const col1 = row.insertCell(0);
		const col2 = row.insertCell(1);
		col1.innerText = "Total";
		col2.innerText = totalTime;
	}
});
 



// const output = document.getElementById('output');
// // const table = document.querySelector('table');

// const row = output.insertRow(-1);
// const col1 = row.insertCell(0);
// const col2 = row.insertCell(1);
// col1.innerText = "Loading...";
// col2.innerText = "Loading...";

// const promises = [
// 	new Promise (resolve => {
// 		setTimeout(() => {
// 			resolve();
// 			return "Promise 1";
// 		}, Math.random() * 3000);
// 	}),

// 	new Promise (resolve => {
// 		setTimeout(() => {
// 			resolve();
// 		}, Math.random() * 3000);
// 	}),

// 	new Promise (resolve => {
// 		setTimeout(() => {
// 			resolve()
// 		}, Math.random() * 3000);
// 	})
// ];

// const timeArray = [];
// Promise.all(promises).then((result) => {

// 	row.remove();

// 	const start = performance.now();
// 	const tableRow = output.insertRow(-1);
// 	const tableCel1 = tableRow.insertCell(0);
// 	const tableCel2 = tableRow.insertCell(1);
// 	const end = performance.now();
// 	const time = end - start;
// 	timeArray.push(time);
// 	tableCel1.innerText = value;
// });





