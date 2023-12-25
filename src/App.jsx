import { useCallback, useEffect, useRef, useState } from "react";
import Checkbox from "./components/Checkbox";
import ShowPassword from "./components/ShowPassword";
import InputRange from "./components/InputRange";

function App() {
  // State variables for password generation
  const [passLength, setPassLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const [SymbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Reference for the password input field
  const passwordRef = useRef(null);

  // Function to generate a random password based on settings
  const generatePassword = useCallback(() => {
    let newPassword = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) str += "0123456789";
    if (SymbolsAllowed) str += "!@-#$^+";

    for (let i = 0; i < passLength; i++) {
      const randomNumber = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(randomNumber);
    }
    setPassword(newPassword);
  }, [
    numbersAllowed,
    passLength,
    uppercaseAllowed,
    SymbolsAllowed,
    setPassword,
  ]);

  // useEffect to generate a password when settings change
  useEffect(() => {
    generatePassword();
  }, [passLength, generatePassword, uppercaseAllowed, SymbolsAllowed]);

  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    setMessage("Password copied to clipboard");
    window.navigator.clipboard.writeText(password);
    setTimeout(() => setMessage(""), 3000);
  }, [password]);

  return (
    <div className="bg-slate-300 min-w-[400px] mx-auto p-4 flex flex-col gap-3 mt-10 rounded-md">
      <h1 className="text-xl font-semibold tracking-wider">
        Password Generator
      </h1>
      <hr />
      {/* Password Input Field to show Password */}
      <ShowPassword
        password={password}
        copyPasswordToClipboard={copyPasswordToClipboard}
        passwordRef={passwordRef}
        message={message}
      />
      {/* Clipboard Copy success message */}
      {message && <span className="text-green-700 text-sm">{message}</span>}
      {/* Password Length Setting */}
      <InputRange passLength={passLength} setPassLength={setPassLength} />
      {/* Password Settings */}
      <Checkbox
        setUppercaseAllowed={setUppercaseAllowed}
        uppercaseAllowed={uppercaseAllowed}
        setNumbersAllowed={setNumbersAllowed}
        numbersAllowed={numbersAllowed}
        setSymbolsAllowed={setSymbolsAllowed}
        SymbolsAllowed={SymbolsAllowed}
      />
    </div>
  );
}

export default App;
