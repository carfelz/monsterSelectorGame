import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { Winner } from '../../models/interfaces/winner.interface';
import { fetchMonstersData, setSelectedMonster, startBattle, setCPUMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  cpuMonster: Monster | null;
  winner: Winner | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  cpuMonster: null,
  winner: null
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setCPUMonster, (state, action) => ({
    ...state,
    cpuMonster: action.payload
  }))

  builder.addCase(startBattle.fulfilled, (state, action: PayloadAction<Winner>) =>
  ({
    ...state,
    winner: action.payload,
  }));

});