import { render, screen, within, logRoles } from "@testing-library/react";
import UserTable from "./UserTable";
import { users } from "@/App";

describe('UserTable()', () => {
    it('should render what am i testing correctly',async () => {
        // render(<UserTable users={users} />);
        const {container} = render(<UserTable users={users} />);
        logRoles(container);

        // const welcomeMessageEl = await screen.findByTestId('welcome', {}, {timeout: 2000});
        // expect(welcomeMessageEl).toBeInTheDocument();

        // screen.logTestingPlaygroundURL();
        const rows = within(screen.getByTestId('users')).getAllByRole('row');
        expect(rows).toHaveLength(3);
    })
})
