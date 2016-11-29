import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './javascript/components/Root.js';

const app = express();

app
    .use('/', (req, res) => {
        res.send(`<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root />)}`);
    })

    .use('*', (req, res) => {
        res.status(301).redirect('/');
    });

app.listen(8081);
