import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData, startBattle } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster, selectSelectedCPUMonster, fightResults } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { Combatant } from "../../models/interfaces/combatant.interface"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const player1 = useSelector(selectSelectedMonster)
    const cpuPlayer = useSelector(selectSelectedCPUMonster)
    const results = useSelector(fightResults)
    const winner = results?.winner
    const isTied = results?.tie
    const isButtonEnabled = player1 && cpuPlayer && player1.id && cpuPlayer.id

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    

    const handleStartBattleClick = () => {
        if(player1?.id && cpuPlayer?.id) {
            const combatants: Combatant = {
                monster1Id: player1?.id,
                monster2Id: cpuPlayer?.id
            }
            dispatch(startBattle(combatants))
        }
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {
                !!results && (
                    <WinnerDisplay text={`${isTied ? 'The match is tied' : `${winner?.name} wins!`}`} />
                )
            }

            <BattleSection>
                <MonsterBattleCard title="Player" monster={player1}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={!isButtonEnabled} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title="Computer" monster={cpuPlayer}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }