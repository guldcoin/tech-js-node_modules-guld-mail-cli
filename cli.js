#!/usr/bin/env node
const { getAddress } = require('guld-mail')
const { setupConfig } = require('guld-git-config')
const program = require('commander')
const VERSION = require('./package.json').version
const addrs = require('email-addresses')
const isEmail = require('is-email')
const inquirer = require('inquirer')

/* eslint-disable no-console */
program
  .description('Guld mail is a signed, encrypted, and witnessed email system.')
  .version(VERSION)
program
  .command('address [name]')
  .description('Get the guld address of the current or specified user.')
program
  .command('parse <address>')
  .description('Parse an email address, returning exit code 1 if invalid.')
program
  .command('init [address]')
  .description('Setup your public email address for the guld network.')

program.parse(process.argv)

function printaddr (a) {
  if (!isEmail(a)) {
    console.error('invalid address')
    process.exit(1)
  } else {
    var addr = addrs(a)
    var astr = addr.addresses[0].address
    if (addr.addresses[0].name) astr += `\n${addr.addresses[0].name}`
    console.log(astr)
  }
}

function inquireAddr (addr) {
  inquirer
    .prompt([
      {
        name: 'guldmail',
        type: 'input',
        message: 'What is your email address? (WARNING: public info!)',
        default: addr
      }
    ]).then(answers => {
      if (!isEmail(answers.guldmail)) {
        console.error('invalid address')
        process.exit(1)
      } else {
        setupConfig({'user': {'email': answers.guldmail}})
      }
    })
}

var cmd = program.args.shift()
/* eslint-disable no-console */
switch (cmd) {
  case 'parse':
    if (program.args.length > 0) printaddr(program.args[0])
    else getAddress().then(printaddr)
    break
  case 'init':
    if (program.args.length > 0) inquireAddr(program.args[0])
    else getAddress().then(inquireAddr)
    break
  case 'address':
  default:
    if (program.args.length > 0) getAddress(program.args[0]).then(console.log)
    else getAddress().then(console.log)
    break
}
/* eslint-enable no-console */
