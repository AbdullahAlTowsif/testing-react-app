import {render, screen} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

it('should render hello world correctly', () => {
    // render(<App />)
    render(<Provider store={store}><App/></Provider>)
    const element = screen.getByText('Hello World');

    expect(element).toBeInTheDocument()
});
