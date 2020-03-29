import encrypt from '../../src/utils/encrypt';

describe('Generate unique id', () => {
  const id = encrypt();

  it('showl generate an unique id', () => {
    expect(id).toHaveLength(8);
  });
});
