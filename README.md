# Server Code Wrapper

**POC** of including server-side code querying a database inside client-side javascript.

## How it works

A js wrapper function is used in the front-end to pass the server function to an API endpoint.

The API will execute the code within a [vm2 sandbox](https://github.com/patriksimek/vm2) and pass back the result within a callback.

For this simple example, the mongoClient has been hardcoded and provided within the VM's global object.

## Setup

1. Install MongoDB
2. Open the mongo shell
3. `db.createCollection("users");`
4. `db.users.insert({"firstName: "John", lastName: "Smith"});`
5. Start server with: `npm start`
6. Open ./client/index.html file in your browser
7. Open dev console to check output of the db query

## Notes

Some warning appears when running the node server, this seems to be related to a mongodb bug in 3.6.4: https://github.com/mongodb/node-mongodb-native/pull/2734.
