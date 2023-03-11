
import InputForm from "./components/InputForm";
import DisplayForm from "./components/DisplayForm";
import { useState } from "react";
function App() {
  const [userIds, setUserIds] = useState([]);
  const updateUser = (user) => {
    setUserIds([...userIds, user]);
  }
  return (
    <div>
      <InputForm updateUser={updateUser} />
      <DisplayForm userIds={userIds} />
    </div>
  );
}

export default App;
