import {getUser} from "./github";

jest.mock('./github');

test('should fetch users', async () => {
  await getUser('heose').then(users => {
    expect(users.login).toEqual('heose')
  });
});
