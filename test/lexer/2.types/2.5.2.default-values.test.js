import { lex, getCode } from "../../util";

test("2.5.2.default-values", async () => {
  const code = await getCode("./manual/2.types/2.5.2.default-values.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'MyFunction' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'IdentToken', value: 'a' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'b' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'LiteralToken', type: "Numeric", value: '10' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'OperatorToken', value: '->' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
