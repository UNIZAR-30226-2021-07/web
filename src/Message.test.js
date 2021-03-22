import { render, screen } from '@testing-library/react';
import Message from './Message';

test('renders message', () => {
    render(<Message userid="Nombre 1"text="Mensaje 1"/>);
    const usernameElement = screen.getByText("Nombre 1: Mensaje 1");
    expect(usernameElement).toBeInTheDocument();
});