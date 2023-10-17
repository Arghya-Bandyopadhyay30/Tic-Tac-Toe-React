import { screen, render } from '@testing-library/react';
import Board from '../Board/Board'

describe('Testing Functionality of Board', () => {
    it('Status on Next Player', () => {
        const sq = Array(9).fill(null);
        render(<Board squares={sq} xIsNext={true} onPlay={() => {}} />);
        expect(screen.getByTestId("status")).toHaveTextContent('Next Move: X');
    });
})