import { lex, getCode } from "../../util";

test("5.6.0.null-coalescing", async () => {
  const code = await getCode(
    "./manual/5.expressions/5.6.0.null-coalescing.elias"
  );
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myField' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'IdentToken', value: 'myObject' },
    { variant: 'OperatorToken', value: '.' },
    { variant: 'IdentToken', value: 'field' },
    { variant: 'OperatorToken', value: '??' },
    { variant: 'LiteralToken', type: "String", value: 'Default value' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
