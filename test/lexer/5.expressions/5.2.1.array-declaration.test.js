import { lex, getCode } from "../../util";

test("5.2.1.array-declaration", async () => {
  const code = await getCode("./manual/5.expressions/5.2.1.array-declaration.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myArray' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Array' },
    { variant: 'OperatorToken', value: '<' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'OperatorToken', value: '>' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'DelimiterToken', value: '[' },
    { variant: 'IntToken', value: '1' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '2' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '3' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '4' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '5' },
    { variant: 'DelimiterToken', value: ']' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myArray2' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'KeywordToken', value: 'new' },
    { variant: 'IdentToken', value: 'Array' },
    { variant: 'OperatorToken', value: '<' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'OperatorToken', value: '>' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
