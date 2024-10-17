import { Position } from "../position";
import { ExprDef } from "./expr-def";

/**
 * Expression type.
 */
export type Expr = {
  pos: Position;
  expr: ExprDef;
};

/**
 * Create an expression.
 * @param pos - The position of the expression.
 * @param expr - The expression definition.
 * @returns The expression.
 */
export function createExpr(pos: Position, expr: ExprDef): Expr {
	return {
		pos,
		expr,
	};
}
