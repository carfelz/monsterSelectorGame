import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import { Winner } from '../../models/interfaces/winner.interface';
import { Combatant } from '../../models/interfaces/combatant.interface';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const startBattle = createAsyncThunk<Winner, Combatant>(
  'monsters/startBattle',
  async (mostersId): Promise<Winner> => {
    try {
      return await MonsterService.postBattle(mostersId)
    } catch(e) {
      throw new Error('Unable to start battle')
    }
  }
)

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setCPUMonster = createAction<Monster | null>(
  'monster/setCPUMonster',
)
