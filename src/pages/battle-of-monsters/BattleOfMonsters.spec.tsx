import { act, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BattleOfMonsters } from './BattleOfMonsters'
import mockFetch from 'jest-fetch-mock'

import monstersData from '../../../data/monsters.json'
import { store } from '../../app/store'
import * as hooks from '../../app/hooks';

const battleOfMonstersFactory = async () => {
    mockFetch.mockResponse(req => {
        if (req.url.includes('monsters')) {
            return Promise.resolve(JSON.stringify(monstersData.monsters))
        }

        if(req.url.includes('battle')) {
            return Promise.resolve(JSON.stringify(monstersData.monsters[0]))
        }

        return Promise.reject(new Error('not mapped url'))
    })
    render(
        <Provider store={store}>
          <BattleOfMonsters />
        </Provider>
    )
    await waitFor(() => expect(screen.getByTestId('monsters-list-section').childNodes).toHaveLength(monstersData.monsters.length))
}

describe('BattleOfMonsters', () => {
    beforeEach(() => {
        mockFetch.enableMocks()
        mockFetch.resetMocks()
    })

    it('should render the page container', async (): Promise<void> => { 
        await battleOfMonstersFactory()
        expect(screen.getByText(/Battle of Monsters/i)).toBeInTheDocument()
        expect(screen.getByTestId('start-battle-button')).toBeInTheDocument()
    })

    it('should enable the start battle button on choose a monster', async (): Promise<void> => {
        await battleOfMonstersFactory()
        expect(screen.getByTestId('start-battle-button')).toBeDisabled()
        expect(screen.getByTestId('monster-1')).toBeInTheDocument()
        act(() => screen.getByTestId('monster-1').click())
        expect(screen.getByTestId('start-battle-button')).toBeEnabled()
        act(() => screen.getByTestId('monster-1').click())
        expect(screen.getByTestId('start-battle-button')).toBeDisabled()
    })

    it('should start fight after click on button', async (): Promise<void> => {
        await battleOfMonstersFactory()
        expect(screen.getByTestId('monster-1')).toBeInTheDocument()
        
        act(() => screen.getByTestId('monster-1').click());
        act(() => screen.getByTestId('start-battle-button').click());
    })

    it("should display a winner if there's any", async (): Promise<void> => {
        await battleOfMonstersFactory();
        jest.spyOn(hooks, 'useAppDispatch')

        act(() => screen.getByTestId('monster-2').click())
        expect(screen.getByTestId('start-battle-button')).toBeEnabled()

        act(() => screen.getByTestId('start-battle-button').click())

        const winnerDisplay: HTMLElement = screen.getByTestId('winner-display');
        expect(winnerDisplay).toBeInTheDocument();
    })
})