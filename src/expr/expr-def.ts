import { Expr } from ".";
import { Position } from "../position";

/**
 * String literal kind.
 */
export enum StringLiteralKind {
  DoubleQuotes = "DoubleQuotes",
  SingleQuotes = "SingleQuotes",
}

/**
 * Integer constant.
 */
export type CInt = {
  variant: "CInt";
  v: string;
};

/**
 * Float constant.
 */
export type CFloat = {
  variant: "CFloat";
  v: string;
  // s: string;
};

/**
 * String constant.
 */
export type CString = {
  variant: "CString";
  s: string;
  kind: StringLiteralKind;
};

/**
 * Identifier constant.
 */
export type CIdent = {
  variant: "CIdent";
  s: string;
};

/**
 * Regexp constant.
 */
export type CRegexp = {
  variant: "CRegexp";
  r: string;
  opt: string;
};

/**
 * Constant type.
 */
export type Constant = CInt | CFloat | CString | CIdent | CRegexp;

/**
 * Constant expression.
 */
export type EConst = {
  variant: "EConst";
  c: Constant;
};

/**
 * Create a constant expression.
 * @param c - The constant.
 * @returns The constant expression.
 */
export function EConstConstructor(c: Constant): EConst {
  return {
    variant: "EConst",
    c,
  };
}

/**
 * Array expression.
 */
export type EArray = {
  variant: "EArray";
  e1: Expr;
  e2: Expr;
};

/**
 * Create an array expression.
 * @param e1 - The first element.
 * @param e2 - The second element.
 * @returns The array expression.
 */
export function EArrayConstructor(e1: Expr, e2: Expr): EArray {
  return {
    variant: "EArray",
    e1,
    e2,
  };
}

/**
 * Binary operator normal.
 */
export enum BinopNormal {
  "OpAdd" = "+",
  "OpMult" = "*",
  "OpDiv" = "/",
  "OpSub" = "-",
  "OpAssign" = "=",
  "OpEq" = "==",
  "OpNotEq" = "!=",
  "OpGt" = ">",
  "OpGte" = ">=",
  "OpLt" = "<",
  "OpLte" = "<=",
  "OpAnd" = "&",
  "OpOr" = "|",
  "OpXor" = "^",
  "OpBoolAnd" = "&&",
  "OpBoolOr" = "||",
  "OpShl" = "<<",
  "OpShr" = ">>",
  "OpUShr" = ">>>",
  "OpMod" = "%",
  "OpInterval" = "...",
  "OpArrow" = "=>",
  "OpIn" = "in",
  "OpNullCoal" = "??",
}

/**
 * Binary operator assign.
 */
export enum BinopAssign {
  "OpAddAssign" = "+=",
  "OpMultAssign" = "*=",
  "OpDivAssign" = "/=",
  "OpSubAssign" = "-=",
  // TODO Binary op assign
}

export type Binop =
  | {
      variant: "BinopNormal";
      op: BinopNormal;
    }
  | {
      variant: "BinopAssign";
      op: BinopAssign;
    };

/**
 * Binary operator expression.
 */
export type EBinop = {
  variant: "EBinop";
  op: Binop;
  e1: Expr;
  e2: Expr;
};

/**
 * Create a binary operator expression.
 * @param op - The binary operator.
 * @param e1 - The first expression.
 * @param e2 - The second expression.
 * @returns The binary operator expression.
 */
export function EBinopConstructor(op: Binop, e1: Expr, e2: Expr): EBinop {
  return {
    variant: "EBinop",
    op,
    e1,
    e2,
  };
}

/**
 * Field kind.
 */
export enum EFieldKind {
  Normal = "Normal",
  Safe = "Safe",
}

export type EField = {
  variant: "EField";
  e: Expr;
  field: string;
  kind: EFieldKind;
};

/**
 * Create a field expression.
 * @param e - The expression.
 * @param field - The field.
 * @param kind - The field kind.
 * @returns The field expression.
 */
export function EFieldConstructor(
  e: Expr,
  field: string,
  kind: EFieldKind
): EField {
  return {
    variant: "EField",
    e,
    field,
    kind,
  };
}

/**
 * Parenthesis expression.
 */
export type EParenthesis = {
  variant: "EParenthesis";
  e: Expr;
};

/**
 * Create a parenthesis expression.
 * @param e - The expression.
 * @returns The parenthesis expression.
 */
export function EParenthesisConstructor(e: Expr): EParenthesis {
  return {
    variant: "EParenthesis",
    e,
  };
}

/**
 * Quote status.
 */
export enum QuoteStatus {
  Unquoted = "Unquoted",
  Quoted = "Quoted",
}

/**
 * Object field.
 */
export type ObjectField = {
  field: string;
  expr: Expr;
  quotes?: QuoteStatus;
};

/**
 * Object declaration expression.
 */
export type EObjectDecl = {
  variant: "EObjectDecl";
  fields: ObjectField[];
};

/**
 * Create an object declaration expression.
 * @param fields - The fields.
 * @returns The object declaration expression.
 */
export function EObjectDeclConstructor(fields: ObjectField[]): EObjectDecl {
  return {
    variant: "EObjectDecl",
    fields,
  };
}

/**
 * Array declaration expression.
 */
export type EArrayDecl = {
  variant: "EArrayDecl";
  values: Expr[];
};

/**
 * Create an array declaration expression.
 * @param values - The values.
 * @returns The array declaration expression.
 */
export function EArrayDeclConstructor(values: Expr[]): EArrayDecl {
  return {
    variant: "EArrayDecl",
    values,
  };
}

/**
 * Call expression.
 */
export type ECall = {
  variant: "ECall";
  e: Expr;
  params: Array<Expr>;
};

/**
 * Create a call expression.
 * @param e - The expression.
 * @param params - The parameters.
 * @returns The call expression.
 */
export function ECallConstructor(e: Expr, params: Array<Expr>): ECall {
  return {
    variant: "ECall",
    e,
    params,
  };
}

/**
 * Field type fvar.
 */
export type FieldTypeFVar = {
  variant: "FVar";
  t?: ComplexType;
  e?: Expr;
};

/**
 * Field type ffun.
 */
export type FieldTypeFFun = {
  variant: "FFun";
  f: Function;
};

/**
 * Field type fprop.
 */
export type FieldTypeFProp = {
  variant: "FProp";
  get: string;
  set: string;
  t: ComplexType;
  e?: Expr;
};

/**
 * Field type.
 */
export type FieldType = FieldTypeFVar | FieldTypeFFun | FieldTypeFProp;

/**
 * Access.
 */
export enum Access {
  "APublic",
  "APrivate",
  "AStatic",
  "AOverride",
  "AFinal",
  "AExtern",
}

/**
 * Field.
 */
export type Field = {
  pos: Position;
  name: string;
  kind: FieldType;
  doc?: string;
  access?: Access[];
};

/**
 * Complex type tpath.
 */
export type ComplexTypeTPath = {
  variant: "TPath";
  p: TypePath;
};

/**
 * Complex type tfunction.
 */
export type ComplexTypeTFunction = {
  variant: "TFunction";
  args: ComplexType[];
  ret: ComplexType;
};

/**
 * Complex type tanonymous.
 */
export type ComplexTypeTAnonymous = {
  variant: "TAnonymous";
  fields: Field[];
};

/**
 * Complex type tparent.
 */
export type ComplexTypeTParent = {
  variant: "TParent";
  t: ComplexType;
};

/**
 * Complex type textend.
 */
export type ComplexTypeTExtend = {
  variant: "TExtend";
  p: Array<TypePath>;
  fields: Field[];
};

/**
 * Complex type toptional.
 */
export type ComplexTypeTOptional = {
  variant: "TOptional";
  t: ComplexType;
};

/**
 * Complex type tnamed.
 */
export type ComplexTypeTNamed = {
  variant: "TNamed";
  n: string;
  t: ComplexType;
};

/**
 * Complex type tintersection.
 */
export type ComplexTypeTIntersection = {
  variant: "TIntersection";
  tl: ComplexType[];
};

/**
 * Complex type.
 */
export type ComplexType =
  | ComplexTypeTPath
  | ComplexTypeTFunction
  | ComplexTypeTAnonymous
  | ComplexTypeTParent
  | ComplexTypeTExtend
  | ComplexTypeTOptional
  | ComplexTypeTNamed
  | ComplexTypeTIntersection;

/**
 * Type parameter tptype.
 */
export type TypeParamTPType = {
  variant: "TPType";
  t: ComplexType;
};

/**
 * Type parameter tpexpr.
 */
export type TypeParamTPExpr = {
  variant: "TPExpr";
  e: Expr;
};

/**
 * Type parameter.
 */
export type TypeParam = TypeParamTPType | TypeParamTPExpr;

/**
 * Type path.
 */
export type TypePath = {
  pack: string[];
  name: string;
  params?: TypeParam[];
  sub?: string;
};

/**
 * New expression.
 */
export type ENew = {
  variant: "ENew";
  t: TypePath;
  params: Array<Expr>;
};

/**
 * Create a new expression.
 * @param t - The type path.
 * @param params - The parameters.
 * @returns The new expression.
 */
export function ENewConstructor(t: TypePath, params: Array<Expr>): ENew {
  return {
    variant: "ENew",
    t,
    params,
  };
}

/**
 * Unary operator.
 */
export enum Unoperators {
  OpIncrement = "++",
  OpDecrement = "--",
  OpNot = "!",
  OpNeg = "-",
  OpNegBits = "~",
  OpSpread = "...",
}

/**
 * Unary operator expression.
 */
export type EUnop = {
  variant: "EUnop";
  op: Unoperators;
  postFix: boolean;
  e: Expr;
};

/**
 * Create a unary operator expression.
 * @param op - The unary operator.
 * @param postFix - Whether the operator is postfix.
 * @param e - The expression.
 * @returns The unary operator expression.
 */
export function EUnopConstructor(
  op: Unoperators,
  postFix: boolean,
  e: Expr
): EUnop {
  return {
    variant: "EUnop",
    op,
    postFix,
    e,
  };
}

/**
 * Variable.
 */
export type Var = {
  type?: ComplexType;
  namePos?: Position;
  name: string;
  isStatic?: boolean;
  isFinal?: boolean;
  expr?: Expr;
};

/**
 * Variables expression.
 */
export type EVars = {
  variant: "EVars";
  vars: Var[];
};

/**
 * Create a variables expression.
 * @param vars - The variables.
 * @returns The variables expression.
 */
export function EVarsConstructor(vars: Var[]): EVars {
  return {
    variant: "EVars",
    vars,
  };
}

/**
 * Function kind anon.
 */
export type FunctionKindAnon = {
  variant: "FunctionKindAnon";
};

/**
 * Function kind arrow.
 */
export type FArrow = {
  variant: "FArrow";
};

/**
 * Function kind named.
 */
export type FNamed = {
  variant: "FNamed";
  name: string;
};

/**
 * Function argument.
 */
export type FunctionArg = {
  value?: Expr;
  type?: ComplexType;
  opt?: boolean;
  name: string;
};

/**
 * Type parameter declaration.
 */
export type TypeParamDecl = {
  params?: TypeParamDecl[];
  name: string;
  defaultType?: ComplexType;
  constraints?: ComplexType[];
};

/**
 * Function.
 */
export type Function = {
  ret?: ComplexType;
  params?: TypeParamDecl[];
  expr?: Expr;
  args: FunctionArg[];
};

/**
 * Function kind.
 */
export type FunctionKind = FunctionKindAnon | FArrow | FNamed;

/**
 * Function expression.
 */
export type EFunction = {
  variant: "EFunction";
  f: Function;
  kind?: FunctionKind;
};

/**
 * Create a function expression.
 * @param f - The function.
 * @param kind - The function kind.
 * @returns The function expression.
 */
export function EFunctionConstructor(
  f: Function,
  kind?: FunctionKind
): EFunction {
  return {
    variant: "EFunction",
    f,
    kind,
  };
}

/**
 * Block expression.
 */
export type EBlock = {
  variant: "EBlock";
  exprs: Expr[];
};

/**
 * Create a block expression.
 * @param exprs - The expressions.
 * @returns The block expression.
 */
export function EBlockConstructor(exprs: Expr[]): EBlock {
  return {
    variant: "EBlock",
    exprs,
  };
}

/**
 * For expression.
 */
export type EFor = {
  variant: "EFor";
  it: Expr;
  expr: Expr;
};

/**
 * Create a for expression.
 * @param it - The iterator.
 * @param expr - The expression.
 * @returns The for expression.
 */
export function EForConstructor(it: Expr, expr: Expr): EFor {
  return {
    variant: "EFor",
    it,
    expr,
  };
}

/**
 * If expression.
 */
export type EIf = {
  variant: "EIf";
  econd: Expr;
  eif: Expr;
  eelse?: Expr;
};

/**
 * Create an if expression.
 * @param econd - The condition.
 * @param eif - The expression if true.
 * @param eelse - The expression if false.
 * @returns The if expression.
 */
export function EIfConstructor(econd: Expr, eif: Expr, eelse?: Expr): EIf {
  return {
    variant: "EIf",
    econd,
    eif,
    eelse,
  };
}

/**
 * While expression.
 */
export type EWhile = {
  variant: "EWhile";
  econd: Expr;
  e: Expr;
};

/**
 * Create a while expression.
 * @param econd - The condition.
 * @param e - The expression.
 * @returns The while expression.
 */
export function EWhileConstructor(econd: Expr, e: Expr): EWhile {
  return {
    variant: "EWhile",
    econd,
    e,
  };
}

/**
 * Case.
 */
export type Case = {
  values: Expr[];
  guard?: Expr;
  expr?: Expr;
};

/**
 * Switch expression.
 */
export type ESwitch = {
  variant: "ESwitch";
  e: Expr;
  cases: Case[];
  edef?: Expr;
};

/**
 * Create a switch expression.
 * @param e - The expression.
 * @param cases - The cases.
 * @param edef - The default expression.
 * @returns The switch expression.
 */
export function ESwitchConstructor(
  e: Expr,
  cases: Case[],
  edef?: Expr
): ESwitch {
  return {
    variant: "ESwitch",
    e,
    cases,
    edef,
  };
}

/**
 * Catch.
 */
export type Catch = {
  type?: ComplexType;
  name: string;
  expr: Expr;
};

/**
 * Try expression.
 */
export type ETry = {
  variant: "ETry";
  e: Expr;
  catches: Catch[];
};

/**
 * Create a try expression.
 * @param e - The expression.
 * @param catches - The catches.
 * @returns The try expression.
 */
export function ETryConstructor(e: Expr, catches: Catch[]): ETry {
  return {
    variant: "ETry",
    e,
    catches,
  };
}

/**
 * Return expression.
 */
export type EReturn = {
  variant: "EReturn";
  e?: Expr;
};

/**
 * Create a return expression.
 * @param e - The expression.
 * @returns The return expression.
 */
export function EReturnConstructor(e?: Expr): EReturn {
  return {
    variant: "EReturn",
    e,
  };
}

/**
 * Break expression.
 */
export type EBreak = {
  variant: "EBreak";
};

/**
 * Create a break expression.
 * @returns The break expression.
 */
export function EBreakConstructor(): EBreak {
  return {
    variant: "EBreak",
  };
}

/**
 * Continue expression.
 */
export type EContinue = {
  variant: "EContinue";
};

/**
 * Create a continue expression.
 * @returns The continue expression.
 */
export function EContinueConstructor(): EContinue {
  return {
    variant: "EContinue",
  };
}

/**
 * Untyped expression.
 */
export type EUntyped = {
  variant: "EUntyped";
  e: Expr;
};

/**
 * Create an untyped expression.
 * @param e - The expression.
 * @returns The untyped expression.
 */
export function EUntypedConstructor(e: Expr): EUntyped {
  return {
    variant: "EUntyped",
    e,
  };
}

/**
 * Throw expression.
 */
export type EThrow = {
  variant: "EThrow";
  e: Expr;
};

/**
 * Create a throw expression.
 * @param e - The expression.
 * @returns The throw expression.
 */
export function EThrowConstructor(e: Expr): EThrow {
  return {
    variant: "EThrow",
    e,
  };
}

/**
 * Ternary expression.
 */
export type ETernary = {
  variant: "ETernary";
  econd: Expr;
  eif: Expr;
  eelse: Expr;
};

/**
 * Create a ternary expression.
 * @param econd - The condition.
 * @param eif - The expression if true.
 * @param eelse - The expression if false.
 * @returns The ternary expression.
 */
export function ETernaryConstructor(
  econd: Expr,
  eif: Expr,
  eelse: Expr
): ETernary {
  return {
    variant: "ETernary",
    econd,
    eif,
    eelse,
  };
}

/**
 * Expression definition.
 */
export type ExprDef =
  | EConst
  | EArray
  | EBinop
  | EField
  | EParenthesis
  | EObjectDecl
  | EArrayDecl
  | ECall
  | ENew
  | EUnop
  | EVars
  | EFunction
  | EBlock
  | EFor
  | EIf
  | EWhile
  | ESwitch
  | ETry
  | EReturn
  | EBreak
  | EContinue
  | EUntyped
  // | EThrow TODO
  | ETernary;
