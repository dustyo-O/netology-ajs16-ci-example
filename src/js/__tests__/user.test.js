import { loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');


beforeEach(() => {
  jest.resetAllMocks();

  httpGet.mockReturnValue('{}');
});

test('user id', () => {
  loadUser(1);

  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
  expect(httpGet).toBeCalledTimes(1);
});

test('user string', () => {
  loadUser('dusty');

  expect(httpGet).toBeCalledWith('http://server:8080/users/dusty');
  expect(httpGet).toBeCalledTimes(1);
});
