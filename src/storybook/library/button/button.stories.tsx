import Button from './button';

export default {
    title: 'Button',
    component: Button,
};

export const Simple = () => <Button text='my button'/>;
export const SimpleInline = () => <Button text='my button' inline />;
export const Red = () => <Button text='my button' color='red' onClick={() => {
    console.log('clcik');
}}/>;
export const Green = () => <Button text='my button' color='green' />;
export const Blue = () => <Button text='my button' color='blue'/>;

export const LinkBlank = () => <Button text='my button' href='https://youtube.com'/>;
export const LinkSelf = () => <Button text='my button' target='_self' href='https://youtube.com'/>;


