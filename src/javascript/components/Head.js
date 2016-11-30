import React, {Component} from 'react';
import {metaDescription} from '../../../aboutData';

export default class Head extends Component {
    render () {
        return (
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>static cv</title>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
        );
    }
}
