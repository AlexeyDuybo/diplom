import express from 'express';
import config from 'config';

const app = express();

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
