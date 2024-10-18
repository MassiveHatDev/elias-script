import { lex, getCode } from "../../util";

test("2.5.1.optional-args", async () => {
  const code = await getCode("./manual/2.types/2.5.1.optional-args.elias")
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
    { variant: 'OperatorToken', value: '?' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'OperatorToken', value: '->' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
