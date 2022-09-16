import BrainfuckInterpreter from "../interpreters/brainfuck";

describe("Brainfuck Interpreter", () => {
  test("initializes and allows read access to values", () => {
    const brainfuckInterpreter = new BrainfuckInterpreter("");

    expect(brainfuckInterpreter.memory).toEqual([0]);
    expect(brainfuckInterpreter.memoryPointer).toEqual(0);
    expect(brainfuckInterpreter.instructionPointer).toEqual(0);
    expect(brainfuckInterpreter.output).toEqual("");
  });

  test("increments memoryPointer pointer", () => {
    const brainfuckInterpreter = new BrainfuckInterpreter(">>>");
    brainfuckInterpreter.execute();
    expect(brainfuckInterpreter.memory).toEqual([0, 0, 0, 0]);
    expect(brainfuckInterpreter.memoryPointer).toEqual(3);
  });

  test("executes code without brackets", () => {
    const brainfuckInterpreter = new BrainfuckInterpreter("+++>>++>+++++<-<++");
    brainfuckInterpreter.execute();
    expect(brainfuckInterpreter.memory).toEqual([3, 2, 1, 5]);
  });
});
