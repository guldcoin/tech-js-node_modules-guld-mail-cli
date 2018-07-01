#!/usr/bin/env node
const { getAddress } = require('guld-mail')
const program = require('commander')
const VERSION = require('./package.json').version

/* eslint-disable no-console */
program
  .description('Guld mail is a signed, encrypted, and witnessed email system.')
  .version(VERSION)
program
  .command('address [name]')
  .description('Get the guld address of the current or specified user.')

program.parse(process.argv)

var cmd
if (program.commands.map(c => c._name).indexOf(program.args[0]) !== -1) cmd = program.args.shift()
/* eslint-disable no-console */
switch (cmd) {
  case 'address':
  default:
    if (program.args.length > 0) getAddress(program.args[0]).then(console.log)
    else getAddress().then(console.log)
    break
}
/* eslint-enable no-console */
