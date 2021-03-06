#!/usr/bin/env node

const util = require('util');
const chalk = require('chalk')
const figlet = require('figlet')
const child_process = require('child_process')
const exec = util.promisify(child_process.exec);
const shell = require('shelljs');

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync("BACKEND CLI", {
                font: "Big",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
}

async function cli(args) {
    init()
    while (true) {
        try {
            child_process.execFileSync('schematics', ['../../schematic/backend-schematic/src/collection.json:backend-cli', '--debug=false'], {
                stdio: 'inherit'
            });
        } catch (error) {
            console.log('error:', error)
        }
        // Run external tool synchronously
    }
}
cli()