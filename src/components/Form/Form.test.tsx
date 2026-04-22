import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import { vi } from 'vitest';
import Form from './Form';

describe('Form()', () => {
    it('submit the form with correctly with user input', async () => {
        user.setup();

        // let isCalled = 0;
        // const submitFn = (data: string) => {
        //     console.log(data);
        //     isCalled += 1;
        // }

        const submitFn = vi.fn();

        render(<Form onSubmit={submitFn} />)

        const inputEl = screen.getByRole('textbox');
        await user.type(inputEl, 'hello prithibi');

        const headingEl = screen.getByRole('heading', {
            level: 2
        })

        const submitBtn = screen.getByRole('button', {
            name: 'Submit'
        });

        await user.click(submitBtn);

        expect(headingEl).toHaveTextContent('hello prithibi');

        // test if the submitFn was called
        expect(submitFn).toHaveBeenCalledWith('hello prithibi');
    })
})