import { RenderResult, render, screen } from "@testing-library/react"
import { MonsterProgressBarProps, MonsterProgressBar } from "./MonsterProgressBar"
import { store } from "../../app/store"
import { Provider } from "react-redux"

let fakeProgressBarData: MonsterProgressBarProps;

const ProgressBarFactory = (props: MonsterProgressBarProps): RenderResult => 
    render(
        <Provider store={store}>
            <MonsterProgressBar {...props} />
        </Provider>
    )

describe("MonsterProgressBar", (): void => {
    it("renders", (): void => {
        fakeProgressBarData = {
            value: 50,
            title: 'testing'
        }

        ProgressBarFactory(fakeProgressBarData);

        const container: HTMLElement = screen.getByTestId(`progress-bar-${fakeProgressBarData.title}`);
        expect(container).toBeInTheDocument();
        expect(container.nodeName).toBe("DIV");
    })
})