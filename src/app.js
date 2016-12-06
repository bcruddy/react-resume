import express from 'express';
import bodyParser from 'body-parser';
import busboy from 'connect-busboy';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './javascript/components/Root.js';

import data from '../aboutData';

const app = express();

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(busboy({ limits: { fileSize: 30 * 1024 * 1024 } }))
    // routes
    .get('/', (req, res) => {
        res.send(`<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root data={data} />)}\n`);
    })
    .post('/generate', (req, res) => {
        req.pipe(req.busboy);
        req.busboy.on('file', (fieldName, fileStream, filename, encode, mimetype) => {

            let body = '',
                json;

            fileStream
                .on('data', (chunk) => { body += chunk })
                .on('end', () => {
                    json = JSON.parse(body);
                    console.log(json);
                })
                .on('error', err => {
                    console.log(err);

                    res.status(500).json({ error: 500, message: 'An error occurred uploading your file.' });
                });
        });
    })
    .use('*', (req, res) => {
        res.status(301).redirect('/');
    });

app.listen(8081, () => {
    console.log(`\n\tstatic-cv listening on 8081\n`);
});
