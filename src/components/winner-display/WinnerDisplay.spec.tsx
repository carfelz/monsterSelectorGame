import { RenderResult, render, screen as document } from "@testing-library/react"
import { WinnerDisplay, WinnerDisplayProps } from "./WinnerDisplay"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import monsterData from "../../../data/monsters.json"

let mockedWinner: WinnerDisplayProps;

const WinnerDisplayFactory = (props: WinnerDisplayProps): RenderResult => {
    return render (
        <Provider store={store}>
            <WinnerDisplay {...props} />
        </Provider>
    )
}

describe("WinnerDisplay", (): void => {
    beforeEach((): void => {
        mockedWinner = {
            text: monsterData.monsters[0].name
        }
    })
    it("Renders", (): void => {
        WinnerDisplayFactory(mockedWinner);

        const container = document.getByTestId('winner-display');

        expect(container).toBeInTheDocument();
    })
})