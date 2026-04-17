import {render, screen} from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

describe('PrimaryButton()', () => {
    it('should render the button', () => {
        render(<PrimaryButton />)

        const element = screen.getByText('click to Add')
        expect(element).toBeInTheDocument();
    })

    it('should render the button with action type properly', () => {
        const actionType = 'Post';
        render(<PrimaryButton action={actionType}/>)

        const element = screen.getByText(`click to ${actionType}`)
        expect(element).toBeInTheDocument();
    })
});
