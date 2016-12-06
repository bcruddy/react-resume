import express from 'express';
import bodyParser from 'body-parser';
import busboy from 'connect-busboy';
import {MongoClient, ObjectId} from 'mongodb';

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
    .get('/cv/:id', (req, res) => {
        MongoClient.connect(process.env.STATIC_CV_DB, (err, db) => {
            if (err) {
                return res.redirect('/?error=render')
            }

            db.collection('resume-data')
                .find({_id: ObjectId(req.params.id)}).toArray((err, docs) => {
                    if (err || !docs || !docs.length) {
                        return res.redirect('/?error=find')
                    }

                    res.send(`<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root data={docs[0]} />)}\n`);
                });

            db.close();
        });
    })
    .post('/cv', (req, res) => {
        req.pipe(req.busboy);
        req.busboy.on('file', (fieldName, fileStream, filename, encode, mimetype) => {

            let body = '',
                json;

            fileStream
                .on('data', (chunk) => { body += chunk })
                .on('end', () => {
                    json = JSON.parse(body);

                    MongoClient.connect(process.env.STATIC_CV_DB, (err, db) => {
                        if (err) {
                            return res.status(500).json({ error: 500, message: 'An error occurred uploading your file.' });
                        }

                        db.collection('resume-data')
                            .insert(json, (err, result) => {
                                res.redirect(`/cv/${result.insertedIds[0]}`);
                            });

                        db.close();
                    });
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
