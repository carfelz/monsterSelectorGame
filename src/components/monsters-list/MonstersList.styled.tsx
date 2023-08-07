import styled from "@emotion/styled"
import { Typography, Card } from "@mui/material"
import { colors } from "../../constants/colors"
  
export const MonsterCard = styled(Card)<{ selected?: boolean }>(({ selected }) => ({
  background: colors.white, 
  border: selected ? `1px solid ${colors.black}` : 'none',
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)', 
  borderRadius: '7px', 
  padding: '7px',
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}))
  
export const MonstersSection = styled.section(() => ({
  marginTop: '20px',
  display: 'flex',
  gap: '16px'
}))