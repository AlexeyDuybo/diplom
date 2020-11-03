import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(3000, () => {
    console.log('server listen in 3000 port');
});
