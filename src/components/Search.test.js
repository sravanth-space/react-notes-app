import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MdSearch } from 'react-icons/md';
import Search from './Search';

describe('Search component', () => {
    it('renders the component', () => {
        const { getByPlaceholderText } = render(<Search handleSearchNote={() => { }} />);
        const searchInput = getByPlaceholderText('type to search...');
        const searchIcon = document.querySelector('.search-icons');

        expect(searchInput).toBeInTheDocument();
        expect(searchIcon).toBeInTheDocument();
    });

    it('calls handleSearchNote when input value changes', () => {
        const mockHandleSearchNote = jest.fn();
        const { getByPlaceholderText } = render(
            <Search handleSearchNote={mockHandleSearchNote} />
        );

        const searchInput = getByPlaceholderText('type to search...');
        fireEvent.change(searchInput, { target: { value: 'Test search' } });

        expect(mockHandleSearchNote).toHaveBeenCalledWith('Test search');
    });
});
