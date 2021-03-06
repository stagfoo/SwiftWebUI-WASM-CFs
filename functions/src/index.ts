import * as functions from 'firebase-functions';
import * as express from 'express'
// import * as path from 'path'

const app = express()

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/wasm', express.static(__dirname + '/wasm'));

export const resource = functions.https.onRequest(app)
