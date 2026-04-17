import {render, screen} from "@testing-library/react";
import UserForm from "./User";

it('should render the user component correctly', () => {
    render(<UserForm />)

    const element = screen.getByRole('textbox', {
        name: 'Full Name'
    });
    expect(element).toBeInTheDocument();
})