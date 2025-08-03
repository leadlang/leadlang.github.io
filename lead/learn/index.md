---
layout: doc
---

# Lead Language Basics

Lead Programming Language is a programming language that is designed to be easy to learn and use.

## Functions in LeadLang

In LeadLang, every function is a **single-liner**, meaning each line must stand on its own, without relying on prior context. This ensures clarity and efficiency in execution.

Consider the following example:

```lead{1,3,5}:line-numbers
$a: @s"Hello"

print $a

drop ->$a
```

Here’s what’s happening:

1. **Line 1** - A string `"Hello"` is allocated to the variable `$a`.
2. **Line 3** - The `print` function receives `$a` as a **non-mutable** reference, meaning it can **read** the value but **cannot modify or drop it**.
3. **Line 5** - The variable `$a` is manually dropped using `drop ->$a`. The `->$` syntax **transfers ownership** of `$a`, ensuring it is **deallocated immediately** to optimize memory usage.

Although dropping is **optional**, it allows precise control over memory, preventing unnecessary allocations.

## Conditions

LeadLang follows a simplified approach to conditions like `if-else`

## Loops

If every single function is a **single-liner**, traditional loops like what's shown below are not possible

## Macros (Coming Soon:tm:)

## Variables

In lead every variable is defined with `$name` syntax.
