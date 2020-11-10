import moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAliases({
    config: path.join(__dirname, '..', '..', 'config.ts'),
    server: path.join(__dirname, './'),
});


import app from 'server/app';
app();
