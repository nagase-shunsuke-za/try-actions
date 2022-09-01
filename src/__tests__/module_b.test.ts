import b from '../module_b';

test('check result value', () => {
    const numlist = [10, 20, 30];
    const result = b(numlist);

    expect(result).toEqual([100, 200, 300]);
});
