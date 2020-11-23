import { PureComponent, FormEvent } from 'react';
import classNames from 'classnames';

import './textInput.scss';

type Ev = FormEvent<HTMLInputElement>

export type TextInputProps = {
    // перерендывает ли реакт компонент при каждом вводе в форму
    isControlled?: boolean,
    // текст, заранее напечатанный в форме
    defaultText?: string,
    // текст плейсхолдера
    placeholderText?: string,
    // callback на ввод в форму
    onInput?: (e: string) => void,
    // фильтрация текста, на вход получает текст, который должен будет отрендертся в форме
    // озвращает текст, который будет отрендерен. !работает только при isControlled=true
    validateInput?: (e: string) => string,
    // цвет формы
    color?: 'red' | 'green' | 'blue',
}

type TextInputState = {
    // состояние фокуса на форме
    isFocused: boolean,
    // есть ли текст в форме
    hasText: boolean,
    // значение, которое будет рендерить форма
    value: string | undefined,
}

class TextInput extends PureComponent<TextInputProps, TextInputState> {
    constructor(props: TextInputProps) {
        super(props);

        const {
            defaultText,
            isControlled,
        } = props;

        this.state = {
            // изначально нет фокуса
            isFocused: false,
            // если есть начальное значение и оно не равно пустой строке, то считаем что есть текст в форме
            hasText: defaultText !== undefined && defaultText.length > 0,
            // если форма контролируемая, то ставим на изначальное значение defaultText, проверяя, существует ли он,
            // иначе ставим пустую строку, для избежания поподания undefined
            // если форма не контролируемая, то ставим defaultText, т.к тут мы может использовать undefined
            value: isControlled === true ? (defaultText === undefined ? '': defaultText) : defaultText,
        };

        this.handleToggleFocus = this.handleToggleFocus.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleToggleFocus() {
        this.setState((state) => ({
            isFocused: !state.isFocused,
        }));
    }

    handleInput(e: Ev) {
        const {
            onInput,
            isControlled,
            validateInput,
        } = this.props;
        // получаем текст формы
        let inputText = e.currentTarget.value;

        // если форма контролируемая и есть функция валидации формы, то валидируем значение
        if (validateInput !== undefined && isControlled === true) {
            inputText = validateInput(inputText);
        }

        // проверяем есть ли текст в форме
        this.setState({
            hasText: inputText.length > 0,
        });

        // если есть функция callback на инпут, то вызываем ее
        if (onInput !== undefined) {
            onInput(inputText);
        }

        // если до текущего инпута value = undefined, значит форма не котролируемая и далее не нужно ничего делать
        if (this.state.value !== undefined) {
            // иначе нужно установить value для отрисовки текущего инпута
            this.setState({
                value: inputText,
            }, () => {
                if (isControlled === true) return;
                // если форма должна быть не контролируемой, то нужно установить value=undefine,
                // после отрисовки текущего инпута, для того что бы форма снова было не контролируемой
                this.setState({
                    value: undefined,
                });
            });
        }
    }


    render() {
        const {
            hasText,
            value,
        } = this.state;
        const {
            placeholderText,
            color,
        } = this.props;

        return (
            <div
                className={
                    classNames(
                        'text-input',
                        (this.state.isFocused === true || hasText === true) && 'text-input_focused',
                        color !== undefined && `text-input_${color}`,
                    )
                }
                data-input-place-holder-text={placeholderText}
            >
                <input
                    onFocus={this.handleToggleFocus}
                    onBlur={this.handleToggleFocus}
                    onInput={this.handleInput}
                    className={
                        classNames(
                            'text-input__content',
                        )
                    }
                    type='text'
                    value={value}
                />
            </div>
        );
    }
}

export default TextInput;
