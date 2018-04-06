#!/usr/bin/env node
let slurm = require('slurm')
let args = slurm({
  i: true,
})

let huey = require('huey')
let prep = require('.')
let fs = require('fsx')

if (args.i) {
  if (fs.isFile('.npmignore')) {
    prep.npmignore()
  } else {
    fatal('.npmignore does not exist')
  }
}

function fatal(msg) {
  console.log(huey.red('Error:'), msg)
  process.exit(1)
}
