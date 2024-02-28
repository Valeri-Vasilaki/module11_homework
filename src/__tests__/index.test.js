const greetUser = require("../index.js");
const mockConsole = require("mock-console");

test("should call console.log with correct greeting message for successful input", () => {
  const restoreConsole = mockConsole();

  jest
    .spyOn(global, "prompt")
    .mockReturnValueOnce("Иван")
    .mockReturnValueOnce("Иванов");

  greetUser();

  expect(global.console.log).toHaveBeenCalledWith("Привет, Иван Иванов!");

  restoreConsole();
});

test("should handle cancellation of input", () => {
  const restoreConsole = mockConsole();

  jest
    .spyOn(global, "prompt")
    .mockReturnValueOnce("Иван")
    .mockReturnValueOnce(null);

  greetUser();

  expect(global.console.log).not.toHaveBeenCalled();

  restoreConsole();
});

test("should handle empty input", () => {
  const restoreConsole = mockConsole();

  jest
    .spyOn(global, "prompt")
    .mockReturnValueOnce("")
    .mockReturnValueOnce("Иванов");

  greetUser();

  expect(global.console.log).toHaveBeenCalledWith("Привет, Иванов!");

  restoreConsole();
});
