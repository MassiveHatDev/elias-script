import { lex, getCode } from "../../util";

test("2.2.3.interfaces", async () => {
  const code = await getCode("./manual/2.types/2.2.3.interfaces.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'interface' },
    { variant: 'IdentToken', value: 'Shape' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'KeywordToken', value: 'def' },
    { variant: 'IdentToken', value: 'area' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Float' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'KeywordToken', value: 'class' },
    { variant: 'IdentToken', value: 'Circle' },
    { variant: 'KeywordToken', value: 'implements' },
    { variant: 'IdentToken', value: 'Shape' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'IdentToken', value: 'radius' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Float' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'KeywordToken', value: 'def' },
    { variant: 'KeywordToken', value: 'new' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'IdentToken', value: 'radius' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Float' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'KeywordToken', value: 'this' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'radius' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IdentToken', value: 'radius' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'KeywordToken', value: 'def' },
    { variant: 'IdentToken', value: 'area' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Float' },
    { variant: 'KeywordToken', value: 'return' },
    { variant: 'IdentToken', value: 'Math' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'PI' },
    { variant: 'OperatorToken', value: '*' },
    { variant: 'KeywordToken', value: 'this' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'radius' },
    { variant: 'OperatorToken', value: '*' },
    { variant: 'KeywordToken', value: 'this' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'radius' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});