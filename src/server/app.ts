import express from 'express';
import config from 'config';
import DB from 'server/utils/db';

const app = express();
new DB();

app.get('/', (req, res) => {
    const origin = req.headers.origin;
    if (!(origin !== undefined && config.allowedHosts.includes(origin))) {
        res.end('bye!');
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ hello: 'world' });
});

export default () => {
    app.listen(config.port, () => {
        console.log('server listen in 3000 port');
    });
};
