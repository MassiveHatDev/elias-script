import { lex, getCode } from "../../util";

test("5.4.2.binary-operators", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.4.2.binary-operators.elias"
  );
  expect(lex(code)).toEqual([]);
});
