import React, { useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    acceptedTerms: boolean;
    submittedAt: Date;
}

const UserForm: React.FC = () => {
    const [name, setName] = useState<string>('Towsif');
    const [email, setEmail] = useState<string>('');
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        terms?: string;
    }>({});

    const validateForm = (): boolean => {
        const newErrors: typeof errors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!acceptedTerms) {
            newErrors.terms = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            const newUser: User = {
                id: crypto.randomUUID(),
                name: name.trim(),
                email: email.trim(),
                acceptedTerms,
                submittedAt: new Date(),
            };

            setUsers([...users, newUser]);

            // Reset form
            setName('');
            setEmail('');
            setAcceptedTerms(false);
            setErrors({});
        }
    };

    const handleDelete = (id: string) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <h1>Testing React h1</h1>
            <h2>Testing React h2</h2>
            <p>Enter the form data</p>
            <img src="https://image.jpg" alt="Person" />
            <div title='open'>open</div>
            <div data-testId='paragraph'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, possimus consequuntur suscipit doloremque a ex qui rerum maxime libero? Alias cum assumenda dolor corrupti culpa eius quibusdam corporis illo ipsum cumque molestiae nam voluptatem enim laudantium est facere, perferendis aliquam dolorem eum? Distinctio numquam quisquam magni quibusdam odit voluptatem doloribus.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">User Registration Form</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                placeholder="John Doe"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                        : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Terms Checkbox */}
                        <div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={acceptedTerms}
                                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                                    className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${errors.terms ? 'border-red-300' : ''
                                        }`}
                                />
                                <label
                                    htmlFor="terms"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    I accept the terms and conditions
                                </label>
                            </div>
                            {errors.terms && (
                                <p className="mt-1 text-sm text-red-600">{errors.terms}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* User List */}
                {users.length > 0 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Registered Users ({users.length})
                        </h3>
                        <div className="space-y-3">
                            {users.map((user) => (
                                <div
                                    key={user.id}
                                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <h4 className="font-medium text-gray-900">{user.name}</h4>
                                            <p className="text-sm text-gray-600">{user.email}</p>
                                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${user.acceptedTerms
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {user.acceptedTerms ? '✓ Terms Accepted' : '✗ Terms Not Accepted'}
                                                </span>
                                                <span>•</span>
                                                <span>
                                                    {user.submittedAt.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                                            aria-label="Delete user"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {users.length === 0 && (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-500">No users registered yet. Fill out the form above to get started.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserForm;