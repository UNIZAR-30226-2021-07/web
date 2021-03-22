import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

test('renders submit button', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
});
