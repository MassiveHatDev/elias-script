import { lex, getCode } from "../../util";

test("5.2.3.object-declaration", async () => {
  const code = await getCode("./manual/5.expressions/5.2.3.object-declaration.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myObject' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Object' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'DelimiterToken', value: '{' },
    { variant: 'IdentToken', value: 'name' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'StringToken', value: 'John' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'age' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IntToken', value: '30' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'isStudent' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'KeywordToken', value: 'false' },
    { variant: 'DelimiterToken', value: '}' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
