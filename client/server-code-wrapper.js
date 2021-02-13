serverCodeWrapper = (method, callback) => {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:3070/run', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = () => {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	        callback(xhr.response);
	    }
	};
	const body = JSON.stringify({
		'method': 'module.exports = ' + method.toString() + ';'
	});
	xhr.send(body);
}; 