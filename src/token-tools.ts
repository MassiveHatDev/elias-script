import { Token } from "./token";

export function getIdentiferValue(token: Token): string {
  switch (token.type.variant) {
    case "IdentToken":
      return token.type.value;
    default:
      throw new Error(`${token.type.variant} must be an Identifier.`);
  }
}
