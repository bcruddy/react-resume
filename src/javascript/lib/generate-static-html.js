import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../components/Root.js';
import fs from 'fs';

let content = `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Root />)}`

fs.writeFileSync('docs/index.html', content);
