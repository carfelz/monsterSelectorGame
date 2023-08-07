import { MonsterService } from './monsters.service';
import monstersData from '../../../data/monsters.json';

describe('Monsters Service', () => {
  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });

  it('should return the winner of the battle', async (): Promise<void> => {
    jest
      .spyOn(MonsterService, 'postBattle')
      .mockResolvedValue({winner: {...monstersData.monsters[0]}, tie: false})
    
    const response = await MonsterService.postBattle({ monster1Id: '0', monster2Id: '1'})

    expect(response).toEqual(
      {winner: {...monstersData.monsters[0]}, tie: false}
    )
  })
});
