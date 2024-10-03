export default function guardrail(mathFunction) {
  try {
    const res = mathFunction();
    const arr = [];
    arr.push(res);
    arr.push('Guardrail was processed');
    return arr;
  } catch (error) {
    const arr = [];
    arr.push(error);
    arr.push('Guardrail was processed');
    return arr;
  }
}
