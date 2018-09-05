# guld-mail-cli

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-mail-cli) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-mail-cli/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/cli/guld-mail-cli.html)

[![node package manager](https://img.shields.io/npm/v/guld-mail-cli.svg)](https://www.npmjs.com/package/guld-mail-cli) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-mail-cli.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-mail-cli?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-mail-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-mail-cli/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-mail-cli/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-mail-cli) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-mail-cli/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-mail-cli?type=dev)

Guld mail is a signed, encrypted, and witnessed email system.

### Install

##### Node

```sh
npm i -g guld-mail-cli
```

### Usage

##### CLI

```sh
guld-mail --help

  Usage: guld-mail [options] [command]

  Guld mail is a signed, encrypted, and witnessed email system.

  Options:

    -V, --version    output the version number
    -h, --help       output usage information

  Commands:

    address [name]   Get the guld address of the current or specified user.
    parse <address>  Parse an email address, returning exit code 1 if invalid.
    init [address]   Setup your public email address for the guld network.

```

### License

MIT Copyright isysd
