import * as P from './Button.parts';

const Button = ({ disabled, text, click, icon }) => {
    return (
        <P.ControlButton
            active={disabled}
            text={text}
            disabled={disabled}
            onClick={click}
        >
            {text}
            {icon}
        </P.ControlButton>
    );
};

export default Button;
