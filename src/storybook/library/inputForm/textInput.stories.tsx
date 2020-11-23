import TextInput from './textInput';

export default {
    title: 'TextInput',
    component: TextInput,
};

const onInput = (e: unknown) => console.log(e);

export const Simple = () => <TextInput onInput={onInput} placeholderText='placeholder' />;
export const DefaultText= () =>
    <TextInput onInput={onInput} placeholderText='placeholder' defaultText='default text' />;
export const Controlled= () =>
    <TextInput onInput={onInput} placeholderText='placeholder' isControlled />;
export const ControlledDefaultText= () =>
    <TextInput onInput={onInput} placeholderText='placeholder' isControlled defaultText='default text' />;
export const ControlledDefaultTextReplace= () =>
    <TextInput
        onInput={onInput}
        placeholderText='placeholder'
        isControlled
        defaultText='default text'
        validateInput={(s: string) => s.replace(/р/g, 'л')}
    />;
export const Red = () =>
    <TextInput onInput={onInput} color='red' placeholderText='placeholder' defaultText='default text' />;
export const Green = () =>
    <TextInput onInput={onInput} color='green' placeholderText='placeholder' defaultText='default text' />;
export const Blue = () =>
    <TextInput onInput={onInput} color='blue' placeholderText='placeholder' defaultText='default text' />;
