serverCodeWrapper = (method, callback) => {
	fetch('http://localhost:3070/run', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			'method': 'module.exports = ' + method.toString() + ';'
		}),
	  })
	  .then(response => response.json())
	  .then((jsonData) => {
			callback(jsonData);
	  });
}; 