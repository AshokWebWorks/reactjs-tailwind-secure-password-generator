/* eslint-disable react/prop-types */

function ShowPassword({password,copyPasswordToClipboard,passwordRef}) {
  return (
    <div className="w-full relative">
    <input
      type="text"
      className="w-full p-2 rounded-lg outline-none pr-10"
      value={password}
      readOnly
      ref={passwordRef}
    />
    <img
      onClick={copyPasswordToClipboard}
      src="./copy-icon.svg"
      className="absolute top-2 right-2 w-5 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/50"
    />
  </div>
  )
}

export default ShowPassword