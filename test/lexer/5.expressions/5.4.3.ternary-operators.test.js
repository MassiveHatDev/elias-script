import { lex, getCode } from "../../util";

test("5.4.3.ternary-operators", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.4.3.ternary-operators.elias"
  );
  expect(lex(code)).toEqual([]);
});
