import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import Form from './Form';

describe('Form()', () => {
    it('submit the form with correctly with user input', async () => {
        user.setup();
        render(<Form onSubmit={(data) => console.log(data)} />)

        const inputEl = screen.getByRole('textbox');
        await user.type(inputEl, 'hello prithibi');

        const headingEl = screen.getByRole('heading', {
            level: 2
        })

        expect(headingEl).toHaveTextContent('hello prithibi')
    })
})