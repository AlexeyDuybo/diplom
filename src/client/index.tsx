import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'client/components/app/app';
import store from 'client/store';

import './index.scss';

const root = document.getElementById('root');

if (root !== null) {
    render(
        <Provider store={store}>
            <App />
        </Provider>
        , root);
} else {
    throw new Error('no cantainer elements for project');
}
