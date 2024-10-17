import { lex, getCode } from "../../util";

test("5.4.4.precedence", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.4.4.precedence.elias"
  );
  expect(lex(code)).toEqual([]);
});
