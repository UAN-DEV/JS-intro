"use strict";

function validationName(name) {
  if (typeof name !== "string")
    throw new TypeError("name mast be a string nalue");
  if (name.length < 4 || name.length > 32)
    throw RangeError("name mast be min 4 and max 32 characters length");
  return name;
}

try {
  const validateName = validationName(1);
  console.log(validateName);
} catch (error) {
  console.log(error);
}

// Validation of age
function validationAge(age) {
  if (!Number.isFinite(age)) throw new TypeError("name mast be a number");
  if (age <= 0) throw new RangeError("Age mast be posieive");
  if (age < 18) throw new RangeError("You so young!");
  return age;
}

try {
  const validateAge = validationAge(14);
  const validateAge2 = validationAge(24);
  console.log(validateAge2);
} catch (error) {
  console.log(
    error instanceof TypeError
      ? "TypeError gendling"
      : error instanceof RangeError
        ? "RangeError gendling"
        : error instanceof Error
          ? "Error gendling"
          : "Unknow error(((",
  );
}
