const { notFoundError } = require(".");

describe("Given the notFoundError function", () => {
  describe("When it called", () => {
    test("Then it should the response has been called", () => {
      const res = {
        status: () => res,
        json: jest.fn(),
      };

      notFoundError(null, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
