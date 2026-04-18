import {render, screen} from "@testing-library/react";
import FruitList from "./FruitList";
import { fruitList } from "@/App";

describe('FruitList()', () => {
    it('should render the list with list items', () => {
        render(<FruitList fruits={fruitList} />)

        const list = screen.getByRole('list');
        const listItems = screen.getAllByRole('listitem');

        expect(list).toBeInTheDocument();
        expect(listItems).toHaveLength(fruitList.length);
    })
})