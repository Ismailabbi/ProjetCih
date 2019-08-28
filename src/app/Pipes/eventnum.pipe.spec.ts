import { EventnumPipe } from './eventnum.pipe';

describe('EventnumPipe', () => {
  it('create an instance', () => {
    const pipe = new EventnumPipe();
    expect(pipe).toBeTruthy();
  });
});
