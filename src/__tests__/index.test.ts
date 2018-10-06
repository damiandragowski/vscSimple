import { Startup } from '../index';
test('Test SayHiToMe', () => {
  const s1 = new Startup();
  expect(s1.SayHiToMe('Damian')).toBe('Hi Damian');
});
