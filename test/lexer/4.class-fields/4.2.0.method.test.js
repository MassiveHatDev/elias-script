import { lex, getCode } from "../../util";

test("4.2.0.method", async () => {
  const code = await getCode("./manual/4.class-fields/4.2.0.method.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'class' },
    { variant: 'IdentToken', value: 'MyClass' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'KeywordToken', value: 'def' },
    { variant: 'IdentToken', value: 'myMethod' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Void' },
    { variant: 'KeywordToken', value: 'print' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'Hello, world!' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});
