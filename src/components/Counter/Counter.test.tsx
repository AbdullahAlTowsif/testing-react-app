import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

describe('Counter()', () => {
    it('should increase the counter value by 1 upon clicking on increment button',async () => {
        user.setup();
        render(<Provider store={store}><Counter /></Provider>)

        const counterValueEl = screen.getByText('Counter: 0');
        const incrementBtn = screen.getByText('Increment');
        
        await user.click(incrementBtn);
        // const counterValueEl = screen.getByText('1');
        expect(counterValueEl).toHaveTextContent('Counter: 1');

    })
})
