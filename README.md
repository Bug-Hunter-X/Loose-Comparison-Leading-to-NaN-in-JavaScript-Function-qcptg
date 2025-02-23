# JavaScript Loose Comparison Bug

This repository demonstrates a common JavaScript bug related to loose comparison (==) when checking for null or undefined values.

The `foo` function intends to return 0 if the input is null, and `x + 1` otherwise. However, due to loose comparison, `undefined == null` evaluates to true, leading to an incorrect result when `undefined` is passed as an argument. This results in NaN because adding 1 to undefined results in NaN.

The solution demonstrates how to use strict equality (===) to resolve the issue and ensure the correct behavior for both null and undefined inputs.