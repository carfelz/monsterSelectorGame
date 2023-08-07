import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectSelectedCPUMonster = (state: RootState) =>
  state.monsters.cpuMonster;

  export const fightResults = (state: RootState ) => state.monsters.winner
