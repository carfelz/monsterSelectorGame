import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { MonstersList } from './MonstersList'
import { Monster } from '../../models/interfaces/monster.interface'
import monstersData from '../../../data/monsters.json'

let fakeMonster: Monster;

const monstersListFactory = (data = monstersData.monsters) => {
    render(
        <Provider store={store}>
          <MonstersList monsters={data} />
        </Provider>
      );
}

describe('MonstersList', () => {
    beforeEach(() => {
      fakeMonster = monstersData.monsters[0]
    })

    it('should render the monsters list', () => {
      monstersListFactory();
      const monsterItemsCount = screen.getByTestId('monsters-list-section').childNodes.length
      expect(monsterItemsCount).toBe(monstersData.monsters.length)
    })

    it('should render the no monsters available message', () => {
      monstersListFactory([]);
      const noMonstersTitle = screen.getByText(/no monsters available/i)
      expect(noMonstersTitle).toBeInTheDocument()
    })

    it('should click on the first monster card', () => {
      monstersListFactory();
      expect(screen.getByTestId(fakeMonster.id)).toBeInTheDocument()
      act(() => screen.getByTestId(fakeMonster.id).click())
      expect(screen.getByTestId(fakeMonster.id)).toHaveStyle('border: 1px solid #000000;')
      act(() => screen.getByTestId(fakeMonster.id).click())
      expect(screen.getByTestId(fakeMonster.id)).toHaveStyle('border: none;')
    })

    it('should contain a list of cards with an image an a title', (): void => {
      monstersListFactory();
      expect(screen.getByTestId(fakeMonster.id)).toBeInTheDocument()

      const firstCard: HTMLElement = screen.getByTestId(fakeMonster.id);
      const image: HTMLImageElement | null = firstCard.querySelector('img');
      
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', fakeMonster.imageUrl)

      expect(firstCard).toHaveTextContent(fakeMonster.name)
    })
})