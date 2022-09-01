import a from '../module_a';

test('check result value', () => {
    const result = a();

    expect(result).toEqual([10, 2, 3]);
});
