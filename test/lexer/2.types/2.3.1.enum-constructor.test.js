import { lex, getCode } from "../../util";

test("2.3.1.enum-constructor", async () => {
  const code = await getCode("./manual/2.types/2.3.1.enum-constructor.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'r' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'IdentToken', value: 'Color' },
    { variant: 'OperatorToken', value: '.' },
    { variant: 'IdentToken', value: 'Red' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'g' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'IdentToken', value: 'Color' },
    { variant: 'OperatorToken', value: '.' },
    { variant: 'IdentToken', value: 'Green' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'c' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'IdentToken', value: 'Color' },
    { variant: 'OperatorToken', value: '.' },
    { variant: 'IdentToken', value: 'RGB' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'LiteralToken', type: "Numeric", value: '255' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'LiteralToken', type: "Numeric", value: '0' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'LiteralToken', type: "Numeric", value: '0' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
