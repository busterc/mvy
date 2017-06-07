#!/usr/bin/env node
'use strict';

const path = require('path');
const meow = require('meow');
const mv = require('mv');

const cli = meow(`

	Usage

	  $ mvy <source> <target>

`);

if (cli.input.length !== 2) {
  return cli.showHelp();
}

if (cli.input[1].slice(-1) === '/') {
  if (cli.input[0].slice(-1) !== '/') {
    cli.input[1] += path.basename(cli.input[0]);
  } else {
    cli.input[0] = cli.input[0].slice(0, -1);
    cli.input[1] += cli.input[0];
  }
}

mv(cli.input[0], cli.input[1], {
  mkdirp: true,
  clobber: false
}, err => {
  if (err) {
    return console.error(err);
  }
});
