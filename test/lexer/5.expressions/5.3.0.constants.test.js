import { lex, getCode } from "../../util";

test("5.3.0.constants", async () => {
  const code = await getCode("./manual/5.expressions/5.3.0.constants.elias");
  expect(lex(code)).toEqual([
    { variant: 'LiteralToken', type: "Numeric", value: '10' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
