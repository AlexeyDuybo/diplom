import moduleAlias from 'module-alias';
import path from 'path';

moduleAlias.addAliases({
    config: path.join(__dirname, '..', '..', 'config.ts'),
    server: path.join(__dirname, './'),
    components: path.join(__dirname, 'src', 'client', 'components'),
});


import app from 'server/app';
app();
