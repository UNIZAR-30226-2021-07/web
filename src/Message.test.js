import { render, screen } from '@testing-library/react';
import Message from './Message';

test('renders username', () => {
    const messages = [     
        <div>     
          <Message userid="Nombre 1"text="Mensaje 1"/>
        </div>      
    ];
    render(<Message messages={messages}/>);
    const usernameElement = screen.getByText("Nombre 1: Mensaje 1");
    expect(usernameElement).toBeInTheDocument();
});