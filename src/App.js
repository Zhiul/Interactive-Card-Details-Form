import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("Jane Appleseed");
  const [expirationDate, setExpirationDate] = useState("00/00");
  const [CVCNumber, setCVCNumber] = useState("000");

  return (
    <div className="bg-white flex flex-col max-w-[1600px] mx-auto relative before:absolute top-0 before:block before:w-full before:h-[clamp(0px,_64vw,_375px)] before:bg-[url('./images/bg-main-mobile.png')] before:bg-cover md:flex-row md:before:w-[33.541vw] md:before:max-w-[537px] md:before:h-[100%] md:min-h-screen md:before:bg-[url('./images/bg-main-desktop.png')]">
      <Card {...{ number, name, expirationDate, CVCNumber }}></Card>
      <Form></Form>
    </div>
  );
}

export default App;
