import { lex, getCode } from "../../util";

test("5.4.5.overloading", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.4.5.overloading.elias"
  );
  expect(lex(code)).toEqual([]);
});
