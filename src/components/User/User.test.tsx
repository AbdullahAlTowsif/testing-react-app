import { render, screen} from "@testing-library/react";
import UserForm from "./User";

it('should render the user component correctly', () => {
    render(<UserForm />)

    const element = screen.getByRole('textbox', {
        name: 'Full Name'
    });

    const element2 = screen.getByPlaceholderText('John Doe');
    const element3 = screen.getByText('Enter the form data');
    const element4 = screen.getByLabelText('Email Address', {
        selector: 'input'
    });
    const element5 = screen.getByAltText('Person');
    const element6 = screen.getByTitle('open');
    const element7 = screen.getByDisplayValue('Towsif');
    const element8 = screen.getByTestId('paragraph');

    const headingElement = screen.getByRole('heading', {
        name: 'Testing React h2',
        level: 2
    })

    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();
    expect(element4).toBeInTheDocument();
    expect(element5).toBeInTheDocument();
    expect(element6).toBeInTheDocument();
    expect(element7).toBeInTheDocument();
    expect(element8).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
})
