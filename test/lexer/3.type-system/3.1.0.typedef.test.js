import { lex, getCode } from "../../util";

test("3.1.0.typedef", async () => {
  const code = await getCode("./manual/3.type-system/3.1.0.typedef.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'MyType' },
    { variant: 'DelimiterToken', value: '=' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'User' },
    { variant: 'IdentToken', value: 'name' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'String' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'IdentToken', value: 'age' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});
