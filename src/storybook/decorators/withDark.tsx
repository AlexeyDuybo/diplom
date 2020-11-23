import { Component } from 'react';
import classNames from 'classnames';

class WithDark extends Component {
    state = {
        isDark: false,
    }

    toggleDark() {
        this.setState({
            isDark: !this.state.isDark,
        });
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <div
                className={
                    classNames(
                        'app',
                        { 'app_dark': this.state.isDark },
                    )
                }
            >
                <button
                    onClick={() => this.toggleDark()}
                    style={{
                        width: '100%',
                        backgroundColor: 'gray',
                        marginBottom: 15,
                    }}
                >
                    toggle mode
                </button>
                {children}
            </div>
        );
    }
}
/* eslint-disable */
export default (Story: React.FunctionComponent) => <WithDark><Story/></WithDark>;
