/* eslint-disable react/prop-types */

function Checkbox({
  setUppercaseAllowed,
  uppercaseAllowed,
  setNumbersAllowed,
  numbersAllowed,
  setSymbolsAllowed,
  SymbolsAllowed,
}) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <h2>Password Settings</h2>

      {/* Checkbox Settings */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center flex-wrap text-base">
          <Box label="Lowercase (a-z)" stateValue={true} />
          <Box
            label="Uppercase (A-Z)"
            stateValue={uppercaseAllowed}
            setValue={setUppercaseAllowed}
          />
        </div>
        <div className="flex justify-between items-center flex-wrap text-base">
          <Box
            label="Numbers (0-9)"
            stateValue={numbersAllowed}
            setValue={setNumbersAllowed}
          />
          <Box
            label="Symbols (!@-#$^+)"
            stateValue={SymbolsAllowed}
            setValue={setSymbolsAllowed}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkbox;

function Box({ label, stateValue, setValue }) {
  return (
    <>
      <div className="w-[200px] flex gap-2">
        <input
          className="w-4"
          type="checkbox"
          checked={stateValue}
          onChange={() =>setValue && setValue((prev) => !prev)}
        />
        <label>{label}</label>
      </div>
    </>
  );
}
