import Team from '../team';

test('testing add method', () => {
    const team = new Team();
    team.add('samurai');
    expect(team.toArray()).toEqual(['samurai']);
});

test('testing Error add method', () => {
    const team = new Team();
    team.add('samurai');
    expect(() => team.add('samurai')).toThrow('Такой персонаж уже существует');
});

test('testing addAll method', () => {
    const team = new Team();
    team.addAll('samurai', 'swordsman', 'swordsman', 'bowman');
    expect(team.toArray()).toEqual(['samurai', 'swordsman', 'bowman']);
});
