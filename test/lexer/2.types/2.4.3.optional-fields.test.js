import { lex, getCode } from "../../util";

test("2.4.3.optional-fields", async () => {
  const code = await getCode("./manual/2.types/2.4.3.optional-fields.elias")
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'User' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'DelimiterToken', value: '{' },
    { variant: 'IdentToken', value: 'age' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'name' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'String' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'phoneNumber' },
    { variant: 'OperatorToken', value: '?' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'String' },
    { variant: 'DelimiterToken', value: '}' }
  ]);
});
