import { lex, getCode } from "../../util";

test("2.3.1.enum-constructor", async () => {
  const code = await getCode("./manual/2.types/2.3.1.enum-constructor.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'r' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IdentToken', value: 'Color' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'Red' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'g' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IdentToken', value: 'Color' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'Green' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'c' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IdentToken', value: 'Color' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'RGB' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'IntToken', value: '255' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '0' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '0' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
