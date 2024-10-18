import { lex, getCode } from "../../util";

test("5.21.0.cast", async () => {
  const code = await getCode("./manual/5.expressions/5.21.0.cast.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myInt' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'LiteralToken', type: "Numeric", value: '10' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myFloat' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Float' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'KeywordToken', value: 'cast' },
    { variant: 'IdentToken', value: 'myInt' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
