import { RenderResult, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MonsterBattleCard, MonsterCardProps } from "./MonsterBattleCard";
import { store } from "../../app/store";

const fakeMonster = {
    "id": "monster-1",
    "name": "Dead Unicorn",
    "attack": 60,
    "defense": 40,
    "hp": 10,
    "speed": 80,
    "type": "Type",
    "imageUrl": "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png"
}

let mockedCardProps: MonsterCardProps

const monsterBattleCardFactory = (props: MonsterCardProps): RenderResult =>
    render(
        <Provider store={store}>
            <MonsterBattleCard {...props} />
        </Provider>
    )

describe("MonsterBattleCard", (): void => {
    it("Renders with a title when there's no monster", (): void => {
        mockedCardProps = {
            monster: null,
            title: "Player 1"
        }

        monsterBattleCardFactory(mockedCardProps);
        const container = screen.getByTestId('monsters-battle-card');
        const textRendered = screen.getByText(/Player 1/i);

        expect(container).toBeInTheDocument();
        expect(container).toHaveStyle("justify-content: center");
        expect(container).toHaveStyle("align-items: center");
        expect(textRendered).toBeInTheDocument();
        expect(textRendered).toHaveStyle("display: block");
    });

    it("should ignores the title and renders the monster\'s content", (): void => {
        mockedCardProps = {
            monster: fakeMonster,
            title: "testing title"
        }

        monsterBattleCardFactory(mockedCardProps);
        const container: HTMLElement = screen.getByTestId('monsters-battle-card');
        const textRendered: HTMLParagraphElement = screen.getByText(/testing title/i);
        const image: HTMLImageElement = screen.getByRole("img")

        expect(textRendered).toHaveStyle("display: none");
        
        expect(container).not.toHaveStyle("justify-content: center");
        expect(container).not.toHaveStyle("align-items: center");
        expect(container).toHaveTextContent(`${fakeMonster.name}`)

        expect(image).toBeInTheDocument();
        expect(image).toHaveProperty('src', fakeMonster.imageUrl)


    })
})