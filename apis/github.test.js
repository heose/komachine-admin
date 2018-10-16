jest.mock('axios');
import {getUser} from "./github";

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return getUser('vnglst')
      .then(data => {
        expect(data).toBeDefined();
        expect(data.entity.name).toEqual('Koen van Gilst')
      })
  })
});