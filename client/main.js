const callMongoDbDatabase = (callback) => {
	MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	  if (err) throw err;
	  const db = client.db('test');
	  db.collection('users').findOne({}, (findErr, result) => {
	    if (findErr) throw findErr;
	    client.close();
	    callback(result);
	  });
	});
}

serverCodeWrapper(callMongoDbDatabase, (result) => {
	console.log(result);
});