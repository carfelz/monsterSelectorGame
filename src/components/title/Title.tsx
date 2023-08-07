import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "../../constants/colors";

export const Title = styled(Typography)(({ lineHeight, fontSize}: { lineHeight?: string; fontSize?: string; padding?: string}) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontSize || '32px',
    color: colors.black,
    lineHeight: lineHeight || '42px',
}))