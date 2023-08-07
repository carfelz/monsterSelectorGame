import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';
import { Winner } from "../../models/interfaces/winner.interface";
import { Combatant } from "../../models/interfaces/combatant.interface";

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postBattle = async (monstersId: Combatant): Promise<Winner> =>
  await fetch(`${API_URL}/battle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(monstersId)
  }).then( response => response.json())


export const MonsterService = {
  getAll,
  postBattle
};
