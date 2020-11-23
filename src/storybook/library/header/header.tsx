import AuthorizationButtonsContainer from 'containers/authorizationButtons/authorizationButtonsContainer';

import './header.scss';

const Header: React.FunctionComponent = () => (
    <header
        className='header'
    >
        <div
            className='header__content'
        >
            <AuthorizationButtonsContainer />
        </div>
    </header>
);

export default Header;
