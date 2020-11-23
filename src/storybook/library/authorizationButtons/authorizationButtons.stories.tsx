import AuthorizationButtons, { AuthorizationButtonsProps } from './authorizationButtons';

export default {
    title: 'AuthorizationButtons',
    component: AuthorizationButtons,
    argTypes: { onLoginClick: { action: 'clicked' } },
};

export const Template = (args: AuthorizationButtonsProps) => <AuthorizationButtons {...args} />;
export const Simple = () =>
    <AuthorizationButtons onLoginClick={() => null} onRegistrationClick={() => null} />;
export const Column = () => <AuthorizationButtons onLoginClick={() => null} onRegistrationClick={() => null} column />;
