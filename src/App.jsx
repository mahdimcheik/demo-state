import { useState } from "react";
import Avatar from "./components/Avatar";

function App() {
  const bart = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
  };

  return (
    <>
      <Avatar
        firstName={bart.firstName}
        lastName={bart.lastName}
        image={bart.image}
      />
    </>
  );
}

export default App;
