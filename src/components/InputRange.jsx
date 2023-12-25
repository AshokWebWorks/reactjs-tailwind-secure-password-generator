/* eslint-disable react/prop-types */

function InputRange({passLength,setPassLength}) {
  return (
    <div className="flex flex-col gap-2">
    <label className="flex justify-between">
      <span>Password Length</span>
      <span>{passLength}</span>
    </label>
    <input
      type="range"
      max="40"
      value={passLength}
      onChange={(e) => setPassLength(e.target.value)}
    />
  </div>
  )
}

export default InputRange