export default function DisplayResult({ valid, creditStr }) {
  //   const [valid, creditStr] = props;
  return valid === true ? (
    <h1 className="true_result" style={{ color: "purple" }}>
      The credit number {creditStr} can be validated with Luhn
    </h1>
  ) : (
    <h1
      className="false_result"
      style={{ color: "red", animation: "blinker 1s linear infinite" }}
    >
      The credit number {creditStr} cannot be validated with Luhn
    </h1>
  );
}
