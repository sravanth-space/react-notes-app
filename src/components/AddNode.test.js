import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddNote from './AddNote';

describe('AddNote component', () => {
    it('renders the component', () => {
        const { getByPlaceholderText } = render(<AddNote />);
        const textareaElement = getByPlaceholderText('Type to add a note...');
        expect(textareaElement).toBeInTheDocument();
    });

    it('displays remaining characters correctly', () => {
        const { getByText, getByPlaceholderText } = render(<AddNote />);
        const textareaElement = getByPlaceholderText('Type to add a note...');
        const remainingCharsElement = getByText('200 Remaining');

        fireEvent.change(textareaElement, { target: { value: 'Hello, world!' } });

        expect(remainingCharsElement.textContent).toBe('187 Remaining');
    });

    it('calls handleAddNote and clears input on Save button click', () => {
        const mockHandleAddNote = jest.fn();
        const { getByPlaceholderText, getByText } = render(
            <AddNote handleAddNote={mockHandleAddNote} />
        );
        const textareaElement = getByPlaceholderText('Type to add a note...');
        const saveButton = getByText('Save');

        fireEvent.change(textareaElement, { target: { value: 'Test note content' } });
        fireEvent.click(saveButton);

        expect(mockHandleAddNote).toHaveBeenCalledWith('Test note content');
        expect(textareaElement.value).toBe('');
    });

    it('does not call handleAddNote and clear input on Save button click when noteText is empty', () => {
        const mockHandleAddNote = jest.fn();
        const { getByText } = render(<AddNote handleAddNote={mockHandleAddNote} />);
        const saveButton = getByText('Save');

        fireEvent.click(saveButton);

        expect(mockHandleAddNote).not.toHaveBeenCalled();
    });
});
