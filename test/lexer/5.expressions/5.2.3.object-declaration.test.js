import { lex, getCode } from "../../util";

test("5.2.3.object-declaration", async () => {
  const code = await getCode("./manual/5.expressions/5.2.3.object-declaration.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'let' },
    { variant: 'IdentToken', value: 'myObject' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'IdentToken', value: 'Object' },
    { variant: 'OperatorToken', value: '=' },
    { variant: 'DelimiterToken', value: '{' },
    { variant: 'IdentToken', value: 'name' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'LiteralToken', type: "String", value: 'John' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'age' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'LiteralToken', type: "Numeric", value: '30' },
    { variant: 'DelimiterToken', value: ',' },
    { variant: 'IdentToken', value: 'isStudent' },
    { variant: 'OperatorToken', value: ':' },
    { variant: 'KeywordToken', value: 'false' },
    { variant: 'DelimiterToken', value: '}' },
    { variant: 'DelimiterToken', value: ';' }
  ]);
});
