#!/usr/bin/env node

import program from 'commander';
import { version, description } from '../../package.json';
import converter from '..';

program
  .version(version)
  .description(description)
  .arguments('<firstConfig>')
  .action(firstConf => console.log(converter(firstConf)))
  .parse(process.argv);
