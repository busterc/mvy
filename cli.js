#!/usr/bin/env node
'use strict';

const path = require('path');
const meow = require('meow');
const mv = require('mv');

const cli = meow(
  `

	Usage

    $ mvy <source> ... <target>

  Options

    --force, -f  Overwrite existing target files

`,
  {
    flags: {
      force: {
        type: 'boolean',
        alias: 'f',
        default: false
      }
    }
  }
);

if (cli.input.length < 2) {
  return cli.showHelp();
}

let target = cli.input.pop();

let results = cli.input.map(source => {
  let destination = target;

  if (destination.slice(-1) === '/') {
    if (source.slice(-1) !== '/') {
      destination += path.basename(source);
    } else {
      source = source.slice(0, -1);
      destination += source;
    }
  }

  return new Promise((resolve, reject) =>
    mv(
      source,
      destination,
      {
        mkdirp: true,
        clobber: cli.flags.force
      },
      err => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      }
    )
  );
});

Promise.all(results);
