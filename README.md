## Introduction

### What is Eliascript?

Eliascript is a statically typed, high-level programming language that combines the syntax of Ruby with the type system of Haxe. Eliascript compiles to both TypeScript and Ruby. This document provides an overview of the language's syntax and features.

### About this document

This document is a work in progress and is not yet complete. It is intended to provide a high-level overview of the language and its syntax.


## 5. Expressions
Everything is an expression.

Keywords:
- break
- case
- cast
- catch
- class
- continue
- default
- do
- else
- enum
- export
- extends
- extern
- false
- final
- for
- function
- if
- implements
- import
- in
- interface
- let
- new
- null
- operator
- override
- package
- private
- public
- return
- static
- switch
- this
- throw
- true
- try
- typedef
- untyped
- using
- while

### 5.4 Operators

#### 5.4.1 Unary Operators
| Operator | Operation       | Operand type | Position           | Result type |
|----------|-----------------|--------------|--------------------|-------------|
| ~        | Bitwise NOT     | Int          | Prefix             | Int         |
| !        | Logical NOT     | Bool         | Prefix             | Bool        |
| -        | Negation        | Int, Float   | Prefix             | Int, Float  |
| ++       | Increment       | Int, Float   | Prefix and Postfix | Int, Float  |
| --       | Decrement       | Int, Float   | Prefix and Postfix | Int, Float  |

#### 5.4.2 Binary Operators

Arithmetic operators:
| Operator | Operation       | Operand 1  | Operand 2 | Result type |
|----------|-----------------|------------|-----------|-------------|
| +        | Addition        | Int, Float | Int, Float| Int, Float  |
| -        | Subtraction     | Int, Float | Int, Float| Int, Float  |
| *        | Multiplication  | Int, Float | Int, Float| Int, Float  |
| /        | Division        | Int, Float | Int, Float| Float       |
| %        | Modulus         | Int, Float | Int, Float| Int, Float  |

String concatenation operator:
| Operator | Operation            | Operand 1 | Operand 2 | Result type |
|----------|----------------------|-----------|-----------|-------------|
| +        | String concatenation | any       | String    | String      |
| +        | String concatenation | String    | any       | String      |
| +=       | String concatenation | String    | any       | String      |

Bitwise operators:
| Operator | Operation       | Operand 1 | Operand 2 | Result type |
|----------|-----------------|-----------|-----------|-------------|
| <<       | Left Shift      | Int       | Int       | Int         |
| >>       | Right Shift     | Int       | Int       | Int         |
| &        | Bitwise AND     | Int       | Int       | Int         |
| \|       | Bitwise OR      | Int       | Int       | Int         |
| ^        | Bitwise XOR     | Int       | Int       | Int         |

Logical operators:
| Operator | Operation       | Operand 1 | Operand 2 | Result type |
|----------|-----------------|-----------|-----------|-------------|
| &&       | Logical AND     | Bool      | Bool      | Bool        |
| \|\|     | Logical OR      | Bool      | Bool      | Bool        |

Compound assignment operators:
| Operator | Operation       | Operand 1 | Operand 2 | Result type |
|----------|-----------------|-----------|-----------|-------------|
| %=       | Modulus         | Int, Float | Int, Float| Int, Float  |
| *=       | Multiplication  | Int, Float | Int, Float| Int, Float  |
| /=       | Division        | Float      | Int, Float| Float       |
| +=       | Addition        | Int, Float | Int, Float| Int, Float  |
| -=       | Subtraction     | Int, Float | Int, Float| Int, Float  |
| <<=      | Left Shift      | Int        | Int       | Int         |
| >>=      | Right Shift     | Int        | Int       | Int         |
| &=       | Bitwise AND     | Int        | Int       | Int         |
| \|=      | Bitwise OR      | Int        | Int       | Int         |
| ^=       | Bitwise XOR     | Int        | Int       | Int         |

Numeric comparison operators:
| Operator | Operation                | Operand 1 | Operand 2 | Result type |
|----------|--------------------------|-----------|-----------|-------------|
| ==       | Equality                 | Int, Float| Int, Float| Bool        |
| !=       | Inequality               | Int, Float| Int, Float| Bool        |
| <        | Less than                | Int, Float| Int, Float| Bool        |
| <=       | Less than or equal to    | Int, Float| Int, Float| Bool        |
| >        | Greater than             | Int, Float| Int, Float| Bool        |
| >=       | Greater than or equal to | Int, Float| Int, Float| Bool        |

String comparison operators:
| Operator | Operation                | Operand 1 | Operand 2 | Result type |
|----------|--------------------------|-----------|-----------|-------------|
| ==       | Equality                 | String    | String    | Bool        |
| !=       | Inequality               | String    | String    | Bool        |
| <        | Less than                | String    | String    | Bool        |
| <=       | Less than or equal to    | String    | String    | Bool        |
| >        | Greater than             | String    | String    | Bool        |
| >=       | Greater than or equal to | String    | String    | Bool        |

Equality operators:
| Operator | Operation       | Operand 1 | Operand 2 | Result type |
|----------|-----------------|-----------|-----------|-------------|
| ==       | Equality        | any       | any       | Bool        |
| !=       | Inequality      | any       | any       | Bool        |

Miscellaneous operators:
| Operator | Operation       | Operand 1 | Operand 2 | Result type |
|----------|-----------------|-----------|-----------|-------------|
| ...      | Range           | Int       | Int       | IntIterator |
| ->       | Lambda          | any       | any       | Function    |

#### 5.4.3 Ternary Operator
| Operator | Operation       | Operand 1 | Operand 2 | Operand 3 | Result type |
|----------|-----------------|-----------|-----------|-----------|-------------|
| ?:       | condition       | Bool      | any       | any       | any         |

#### 5.4.4 Precedence
In order of descending precedence (i.e. operators higher in the table are evaluated first):
| Operators                                      | Note                              | Associativity |
|------------------------------------------------|-----------------------------------|---------------|
| !, ++, --                                      | postfix unary operators           | right         |
| ~, !, -, ++, --                                | prefix unary operators            | right         |
| %                                              | modulus                           | left          |
| *, /                                           | multiplication and division       | left          |
| +, -                                           | addition and subtraction          | left          |
| <<, >>                                         | bitwise shift                     | left          |
| &, |, ^                                        | bitwise AND, OR, XOR              | left          |
| ==, !=, <, <=, >, >=                           | equality and comparison operators | left          |
| ...                                            | interval                          | left          |
| &&                                             | logical AND                       | left          |
| ||                                             | logical OR                        | left          |
| ?:                                             | ternary operator                  | right         |
| %=, *=, /=, +=, -=, <<=, >>=, >>>=, &=, |=, ^= | compound assignment operators     | right         |
| ->                                             | lambda                            | right         |
