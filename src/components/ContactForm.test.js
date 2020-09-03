import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm'
import App from '../App'

test('can add details and submit in ContactForm', () => {
    render(<ContactForm />);

    const firstName = screen.getByLabelText(/First Name*/i);
    const lastName = screen.getByLabelText(/Last Name*/i);
    const email = screen.getByLabelText(/Email*/i);
    const message = screen.getByLabelText(/Message*/i);

    fireEvent.change(firstName, { target: { value: 'David' } });
    fireEvent.change(lastName, { target: { value: 'Gold' } });
    fireEvent.change(email, { target: { value: 'throwaway@aol.com' } });
    fireEvent.change(message, { target: { value: 'Sup' } });

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);
})

