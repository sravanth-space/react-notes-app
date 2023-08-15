import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotesList from './NotesList';

describe('NotesList component', () => {
    it('renders the component', () => {
        const mockNotes = [
            { id: 1, text: 'Note 1', date: '2023-08-15' },
            { id: 2, text: 'Note 2', date: '2023-08-16' },
        ];

        const { getByText } = render(
            <NotesList
                notes={mockNotes}
                handleAddNote={() => { }}
                handleDeleteNote={() => { }}
            />
        );

        const note1Text = getByText('Note 1');
        const note2Text = getByText('Note 2');
        const addNoteComponent = document.querySelector('.add-note');

        expect(note1Text).toBeInTheDocument();
        expect(note2Text).toBeInTheDocument();
        // expect(addNoteComponent).toBeInTheDocument();
    });

    it('calls handleAddNote when adding a new note', () => {
        const mockHandleAddNote = jest.fn();
        const { getByPlaceholderText, getByText } = render(
            <NotesList
                notes={[]}
                handleAddNote={mockHandleAddNote}
                handleDeleteNote={() => { }}
            />
        );

        const textareaElement = getByPlaceholderText('Type to add a note...');
        const addButton = getByText('Save');

        fireEvent.change(textareaElement, { target: { value: 'New test note' } });
        fireEvent.click(addButton);

        expect(mockHandleAddNote).toHaveBeenCalledWith('New test note');
    });

});
