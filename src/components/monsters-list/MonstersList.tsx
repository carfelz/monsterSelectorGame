import { useEffect, useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setSelectedMonster, setCPUMonster } from "../../reducers/monsters/monsters.actions"
import { MonsterCard, MonstersSection } from "./MonstersList.styled"
import Image from "../image/Image.styled";
import { Title } from "../title/Title"
import { helper } from "../../helpers/helpers"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);
    const [selectedCPUMonsterId, setSelectedCPUMonsterId] = useState<string | null>(null);

    useEffect(() => {
        if(!selectedCPUMonsterId && selectedMonsterId != null  || (selectedCPUMonsterId === selectedMonsterId)) {
            ramdomlySelectCPUMonster(selectedMonsterId);
        }
    }, [selectedMonsterId, selectedCPUMonsterId])

    const handleMonsterClick = (monster: Monster) => {
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        dispatch(setSelectedMonster(!value ? null : monster));
    }

    const ramdomlySelectCPUMonster = (monsterId: string | null) => {
        if(!monsterId) return
        const numberToBeSkipped = Number(monsterId?.split('-')[1]);
        const randomNumber = helper.getRandomNumberButOne(numberToBeSkipped);
        const cpuMonsterID = helper.createMonsterID(randomNumber)
        const [cpuMonster] = monsters.filter(monster => monster.id === cpuMonsterID)

        setSelectedCPUMonsterId(cpuMonster.id);
        dispatch(setCPUMonster(cpuMonster))
    }

    return (
        <div>
            <Title 
                fontSize = '24px'
                lineHeight='28px'
            >
                {monsters.length > 0 ? 'Select your monster': 'No monsters available'}
            </Title>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                        <Image width='136px' height='100px' src={monster.imageUrl} />
                        <Title padding = '7px 0' fontSize='16px' lineHeight='19px'>
                            {monster.name}
                        </Title>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }