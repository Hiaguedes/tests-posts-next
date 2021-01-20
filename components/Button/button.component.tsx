import { ButtonContainer } from './button.styles';

interface ButtonProps {
    children: React.ReactNode;
    onPress: any;
}


const Button = ({children, onPress}: ButtonProps) => {
    return (
        <ButtonContainer onClick={onPress}>
            {children}
        </ButtonContainer>
    );
}

export default Button;
