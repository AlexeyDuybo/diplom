import { render } from 'react-dom';
import App from 'client/app';

const root = document.getElementById('root');

if (root !== null) {
    render(<App />, root);
} else {
    throw new Error('no cantainer elements for project');
}
