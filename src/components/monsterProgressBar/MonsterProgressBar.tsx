import { Title } from "../title/Title";
import { ProgressBar } from "./MonsterProgressBar.styled"
import { Box } from "@mui/material"

type MonsterProgressBarProps = {
    value: number;
    title: string;
}

const MonsterProgressBar: React.FC<MonsterProgressBarProps> = ({ value, title }) => {
    return (
        <Box data-testid={`progress-bar-${title}`} component="div" sx={{py: 1, px: 'auto'}}>
            <Title fontSize='12px' lineHeight='14.06px'>{title}</Title>
            <ProgressBar variant="determinate" value={value} />
        </Box>
    )
}

export { MonsterProgressBar, type MonsterProgressBarProps}
