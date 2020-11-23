import { memo } from 'react';
import classNames from 'classnames';

import Button from 'library/button/button';
import './authorizationButtons.scss';


export type AuthorizationButtonsProps = {
    onLoginClick: () => void,
    onRegistrationClick: () => void,
    column?: boolean,
};

const AuthorizationButtons: React.FunctionComponent<AuthorizationButtonsProps> = ({
    onLoginClick,
    onRegistrationClick,
    column,
}) => (
    <div
        className={
            classNames(
                'authorization-buttons',
                column === true && 'authorization-buttons_column',
            )
        }
    >
        <Button
            text='Регистрация'
            color='blue'
            onClick={onRegistrationClick}
        />
        <Button
            text='Войти'
            onClick={onLoginClick}
        />
    </div>
);

export default memo(AuthorizationButtons);
