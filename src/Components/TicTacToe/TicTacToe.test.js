import { render } from '@testing-library/react';
import TicTacToe from '../TicTacToe/TicTacToe'
 
test('Screen rendered properly', () => {
    const {getByTestId} = render(<TicTacToe/>);
    expect(getByTestId("title")).toHaveTextContent("Tic Tac Toe in React")
})