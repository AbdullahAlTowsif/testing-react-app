import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    age: number;
}

interface Props {
    users: User[]
}

const UserTable = ({ users }: Props) => {
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true)
        }, 1500)
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody data-testId='users'>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                showMessage && <div data-testId='welcome'>Welcome Abdullah Al Towsif</div>
            }
        </div>
    )
}

export default UserTable;
