import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MdDeleteForever } from 'react-icons/md';
import Note from './Note';

describe('Note component', () => {
    it('renders the component', () => {
        const { getByText } = render(<Note id={1} text="Test Note" date="2023-08-15" />);
        const noteTextElement = getByText('Test Note');
        const dateElement = getByText('2023-08-15');
        const deleteIcon = document.querySelector('.delete-icon');

        expect(noteTextElement).toBeInTheDocument();
        expect(dateElement).toBeInTheDocument();
        expect(deleteIcon).toBeInTheDocument();
    });

    it('calls handleDeleteNote when delete icon is clicked', () => {
        const mockHandleDeleteNote = jest.fn();
        const { container } = render(
            <Note id={1} text="Test Note" date="2023-08-15" handleDeleteNote={mockHandleDeleteNote} />
        );

        const deleteIcon = container.querySelector('.delete-icon');
        fireEvent.click(deleteIcon);

        expect(mockHandleDeleteNote).toHaveBeenCalledWith(1);
    });
});
