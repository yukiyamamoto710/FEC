export default function booleanCheck(obj) {
  const {
    boolean,
    value = 0,
    trueFunc = () => {},
    falseFunc = () => {},
  } = obj;
  if (boolean) {
    trueFunc(value);
  } else {
    falseFunc(value);
  }
}
