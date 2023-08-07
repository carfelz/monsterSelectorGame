import { act, render, RenderResult, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Monster } from "../../models/interfaces/monster.interface"
import { store } from "../../app/store"
import  Image  from "./Image.styled"

const mockMonster: Monster = {
    "id": "1",
    "name": "test",
    "attack": 0,
    "defense": 0,
    "hp": 0,
    "speed": 0,
    "type": "Type",
    "imageUrl": "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png"
}

const ImageFactory = (data = mockMonster, width = '12px', height= '12px') : RenderResult => {
    return render(
        <Provider store={store}>
            <Image src={data.imageUrl} width={width} height={height} />
        </Provider>
    )
}

describe("Image", (): void => {
    it("renders", (): void => {
        ImageFactory();
        const [container]: HTMLImageElement[] = screen.getAllByRole('img')
        expect(container).toBeInTheDocument()
        expect(container).toHaveStyle('width: 12px')
        expect(container).toHaveStyle('height: 12px')

    })
})