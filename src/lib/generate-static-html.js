import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../javascript/components/Root.js';
import fs from 'fs';
import path from 'path';

const args = process.argv.splice(2),
    root = path.join(__dirname, '..', '..'),
    outputPath = path.join(root, 'docs', 'index.html');

let content, data,
    inputPath = args.length ? `${root}/${args[0]}` : `${root}/aboutData.json`;

console.log(`Data source: ${inputPath}`);

try {
    data = fs.readFileSync(inputPath).toString();
} catch (ex) {
    inputPath = `${root}/aboutData.json`;
    console.warn(`\n\t${ex.message.split(':')[1].trim()}`);
    console.warn(`\tfalling back to ${inputPath}\n`);
    data = fs.readFileSync(inputPath).toString();
}

try {
    data = JSON.parse(data);

    content = `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root data={data} />)}\n`;
    fs.writeFileSync(outputPath, content);

    console.log('Rendered to dist/index.html');
} catch (ex) {
    console.warn('Input data could not be parsed.');
}
