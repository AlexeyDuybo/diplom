import classnames from 'classnames';
import { Component, MouseEvent } from 'react';
import './button.scss';

import handlerCreater from 'utils/handlerCreator';
import { PropsType, DefaultPropsType } from 'types/propsType';

const defaultProps = {
    target: '_blank',
    inline: false,
} as const;

export type ButtonProps = {
    href?: string,
    target?: '_blank' | '_self',
    text: string,
    customClass?: string,
    inline?: boolean,
    color?: 'red' | 'green' | 'blue',
    onClick?: HandlerType,
    onMouseEnter?: HandlerType,
    onMouseLeave?: HandlerType,
}
type HandlerType = (e: ME) => void
type ME = MouseEvent<HTMLButtonElement | HTMLAnchorElement>
type Props = PropsType<ButtonProps, typeof defaultProps>
type DefaultProps = DefaultPropsType<ButtonProps, typeof defaultProps>
class Button extends Component<ButtonProps> {
    static defaultProps: DefaultProps = defaultProps

    handleMouseLeave: HandlerType
    handleMouseEnter: HandlerType
    handleClick: HandlerType

    constructor(props: Props) {
        super(props);

        this.handleMouseLeave = handlerCreater(props, 'onMouseLeave');
        this.handleClick = handlerCreater(props, 'onClick');
        this.handleMouseEnter = handlerCreater(props, 'onMouseEnter');
    }

    render() {
        const {
            href,
            target,
            text,
            customClass,
            inline,
            color,
        } = this.props as Props;

        const Tag = href !== undefined ? 'a' : 'button';

        return (
            <Tag
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                className={
                    classnames(
                        'button',
                        customClass,
                        {
                            'button_inline': inline,
                            [`button_${color}`]: color !== undefined,
                        },
                    )
                }
                {
                    ...href && {
                        target,
                        href,
                    }
                }
            >
                {text}
            </Tag>
        );
    }
}

export default Button;
