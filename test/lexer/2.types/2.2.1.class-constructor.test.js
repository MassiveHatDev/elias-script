import { lex, getCode } from "../../util";

test("2.2.1.class-constructor", async () => {
  const code = await getCode("./manual/2.types/2.2.1.class-constructor.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'p' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'KeywordToken', value: 'new' },
    { variant: 'IdentToken', value: 'Person' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'LiteralToken', type: "String", value: 'John' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'LiteralToken', type: "Numeric", value: '30' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
