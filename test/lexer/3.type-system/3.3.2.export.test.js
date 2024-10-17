import { lex, getCode } from "../../util";

test("3.3.2.export", async () => {
  const code = await getCode("./manual/3.type-system/3.3.2.export.elias");
  expect(lex(code)).toEqual([
    { variant: 'KeywordToken', value: 'package' },
    { variant: 'IdentToken', value: 'yourpackage' },
    { variant: 'DelimiterToken', value: '.' },
    { variant: 'IdentToken', value: 'yourmodule' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'export' },
    { variant: 'KeywordToken', value: 'class' },
    { variant: 'IdentToken', value: 'Person' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'IdentToken', value: 'name' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'String' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'IdentToken', value: 'age' },
    { variant: 'DelimiterToken', value: ':' },
    { variant: 'IdentToken', value: 'Int' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'public' },
    { variant: 'KeywordToken', value: 'function' },
    { variant: 'KeywordToken', value: 'new' },
    { variant: 'DelimiterToken', value: '(' },
    { variant: 'DelimiterToken', value: ')' },
    { variant: 'DelimiterToken', value: ';' },
    { variant: 'KeywordToken', value: 'end' },
    { variant: 'KeywordToken', value: 'end' }
  ]);
});
