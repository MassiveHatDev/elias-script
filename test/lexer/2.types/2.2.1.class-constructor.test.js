import { lex, getCode } from "../../util";

test("2.2.1.class-constructor", async () => {
  const code = await getCode("./manual/2.types/2.2.1.class-constructor.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'p' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'KeywordToken', value: 'new' },
    { variant: 'IdentToken', value: 'Person' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'StringToken', value: 'John' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IntToken', value: '30' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
