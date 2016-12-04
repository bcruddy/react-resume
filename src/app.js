import express from 'express';
import bodyParser from 'body-parser';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './javascript/components/Root.js';

import data from '../aboutData';

const app = express();

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    // routes
    .use('/', (req, res) => {
        res.send(`<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root data={data} />)}\n`);
    })
    .use('*', (req, res) => {
        res.status(301).redirect('/');
    });

app.listen(8081);
