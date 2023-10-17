import WinnerCalculator from "./WinnerCalculator";

test('Player X is Winner', () => {
    const sq = ['X', 'O', 'O', null, 'X', null, null, null, 'X'];
    const winner = WinnerCalculator(sq);
    expect(winner).toEqual('X');
})

test('Player O is Winner', () => {
    const sq = ['X', 'X', 'O', 'X', 'X', null, 'O', 'O', 'O'];
    const winner = WinnerCalculator(sq);
    expect(winner).toEqual('O');
})

test('Draw', () => {
    const sq = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    const winner = WinnerCalculator(sq);
    expect(winner).toBeNull();
})