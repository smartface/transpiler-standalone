const concurrently = require('concurrently');
// env SMF_CIDE_WS_PATH=$PWD/$WS  concurrently -k 'sfLibraryManager' 'sfMarketplaceService serviceStart' 'transpiler --standalone'
concurrently([
    'sfLibraryManager',
    'sfMarketplaceService serviceStart',
    'transpiler --standalone'
], {
    prefix: 'transpiler',
    killOthers: ['failure', 'success'],
}).then((e) => {
    console.log(e);
}, (e) => {
    console.error(e);
})
.catch(e => console.error(e));