#!/usr/bin/env node

var args = require('minimist')(process.argv.slice(2));
const concurrently = require("concurrently");
// env SMF_CIDE_WS_PATH=$PWD/$WS  concurrently -k 'sfLibraryManager' 'sfMarketplaceService serviceStart' 'transpiler --standalone'
const standalone = args.standalone;
// process.env.SMF_CIDE_WS_PATH = process.cwd();

concurrently([
    'sfLibraryManager',
    'sfMarketplaceService serviceStart',
    standalone ? 'transpiler --standalone' : 'transpiler'
], {
    prefix: 'transpiler',
    killOthers: ['failure', 'success'],
}).then((e) => {
    console.log(e);
}, (e) => {
    console.error(e);
})
.catch(e => console.error(e));
