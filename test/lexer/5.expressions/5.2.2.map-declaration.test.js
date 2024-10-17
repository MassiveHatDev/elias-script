import { lex, getCode } from "../../util";

test("5.2.2.map-declaration", async () => {
  const code = await getCode("./manual/5.expressions/5.2.2.map-declaration.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myMap' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Map' },
    { variant: 'OperatorToken', value: '<' },
    { variant: 'IdentToken', value: 'String' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'OperatorToken', value: '>' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'KeywordToken', value: 'new' },
    { variant: 'IdentToken', value: 'Map' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'IdentToken', value: 'myMap' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'set' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'one' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '1' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'IdentToken', value: 'myMap' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'set' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'two' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '2' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});