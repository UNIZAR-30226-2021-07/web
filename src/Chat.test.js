import React from 'react';
import { render, screen } from '@testing-library/react';
import Chat from './Chat';

test('renders title', () => {
    render(<Chat />);
    const titleElement = screen.getByText(/Chat de partida/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders messages', () => {
    const messages = [
        {
            userid: "Nombre 1",
            text: "Mensaje 1",
        },
        {
            userid: "Nombre 2",
            text: "Mensaje 2",
        },
        {
            userid: "Nombre 3",
            text: "Mensaje 3",
        }
    ]
    render(<Chat messages={messages} />);
    var usernameElement = screen.getByText("Nombre 1: Mensaje 1");
    expect(usernameElement).toBeInTheDocument();
    usernameElement = screen.getByText("Nombre 2: Mensaje 2");
    expect(usernameElement).toBeInTheDocument();
    usernameElement = screen.getByText("Nombre 3: Mensaje 3");
    expect(usernameElement).toBeInTheDocument();
});
