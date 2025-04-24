const { validaCNPJ } = require("./index");

describe("validaCNPJ", () => {
  test("should return true for valid CNPJ with formatting", () => {
    expect(validaCNPJ({ value: "12.345.678/0001-95" })).toBe(true);
  });

  test("should return true for valid CNPJ without formatting", () => {
    expect(validaCNPJ({ value: "37654551000189" })).toBe(true);
  });

  test("should return false for CNPJ with invalid check digits", () => {
    expect(validaCNPJ({ value: "12.345.678/0001-96" })).toBe(false);
  });

  test("should return true for valid alphanumeric CNPJ", () => {
    expect(validaCNPJ({ value: "3F.LLX.81E/0001-12" })).toBe(true);
  });

  test("should return false for CNPJ with wrong length", () => {
    expect(validaCNPJ({ value: "12.345.678/0001" })).toBe(false);
  });

  test("should return false for CNPJ with all same digits", () => {
    expect(validaCNPJ({ value: "11.111.111/1111-11" })).toBe(false);
  });

  test("should return false for empty CNPJ", () => {
    expect(validaCNPJ({ value: "" })).toBe(false);
  });

  test("should return false for CNPJ with invalid characters", () => {
    expect(validaCNPJ({ value: "ab.cde.fgi/hijk-56" })).toBe(false);
  });

  test("should return false for CNPJ with only digits", () => {
    expect(validaCNPJ({ value: "00000000000000" })).toBe(false);
  });
});
