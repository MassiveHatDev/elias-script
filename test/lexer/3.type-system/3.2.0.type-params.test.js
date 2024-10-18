import { lex, getCode } from "../../util";

test("3.2.0.type-params", async () => {
  const code = await getCode("./manual/3.type-system/3.2.0.type-params.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'typedef' },
    { variant: 'IdentToken', value: 'MyList' },
    { variant: 'OperatorToken', value: '<' },
    { variant: 'IdentToken', value: 'T' },
    { variant: 'OperatorToken', value: '>' },
    { variant: 'IdentToken', value: 'head' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'T' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'IdentToken', value: 'tail' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'MyList' },
    { variant: 'OperatorToken', value: '<' },
    { variant: 'IdentToken', value: 'T' },
    { variant: 'OperatorToken', value: '>' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});
