import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard } from "./MonsterBattleCard.styled";
import { MonsterProgressBar } from "../monsterProgressBar/MonsterProgressBar";
import Image from "../image/Image.styled";
import { Title } from "../title/Title";


type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
    const monstersSpecs = [
        { title: 'HP', value: monster?.hp || 0 },
        { title: 'Attack', value: monster?.attack || 0 },
        { title: 'Defense', value: monster?.defense || 0 },
        { title: 'Speed', value: monster?.speed || 0 },
    ];

    return (
        <BattleMonsterCard data-testid="monsters-battle-card" centralized={monster == null}>
            <Title display={`${monster?.id ? 'none' : 'block'}`}>{title!}</Title>
            {
                monster != null && (
                    <>
                        <Image width={283} height={178} hidden={monster == null} src={monster?.imageUrl}></Image>
                        <Title fontSize='22px' lineHeight='25.78px' padding="10px 0" borderBottom='solid 1px rgba(0, 0, 0, 0.1)'>{monster?.name}</Title>
                        {
                            monstersSpecs.map(specs => (
                                <MonsterProgressBar data-testid="monster-specs" key={specs.title} title={specs.title} value={specs.value} />
                            ))
                        }
                    </>
                )
            }
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard, type MonsterCardProps }