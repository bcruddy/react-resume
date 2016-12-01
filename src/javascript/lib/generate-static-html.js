import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../components/Root.js';
import fs from 'fs';
import path from 'path';

import data from '../../../aboutData';

let content = `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root data={data} />)}\n`,
    root = path.join(__dirname, '..', '..', '..'),
    outputDest = path.join(root, 'docs', 'index.html');

fs.writeFileSync(outputDest, content);
