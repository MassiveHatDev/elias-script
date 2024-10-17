import { lex, getCode } from "../../util";

test("5.14.0.if", async () => {
  const code = await getCode("./manual/5.expressions/5.14.0.if.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'if' },
    { variant: 'IdentToken', value: 'condition' },
    { variant: 'KeywordToken', value: 'print' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'Hello, world!' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'KeywordToken', value: 'if' },
    { variant: 'IdentToken', value: 'condition' },
    { variant: 'KeywordToken', value: 'print' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'Hello, condition1!' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'IdentToken', value: 'elseif' },
    { variant: 'IdentToken', value: 'condition' },
    { variant: 'KeywordToken', value: 'print' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'Hello, condition2!' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'else' },
    { variant: 'KeywordToken', value: 'print' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'Hello, other!' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});
