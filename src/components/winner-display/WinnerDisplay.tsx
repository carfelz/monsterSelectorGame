import { WinnerDisplayContainer, WinnerText } from "./WinnerDisplay.styled"

type WinnerDisplayProps = {
    text: string;
}

const WinnerDisplay: React.FC<WinnerDisplayProps> = ({ text }) => (
    <WinnerDisplayContainer data-testid = "winner-display" >
        <WinnerText>{text}</WinnerText>
    </WinnerDisplayContainer>
)

export { WinnerDisplay, type WinnerDisplayProps }