import React, {useState} from "react";

function Toggle() {
  const [isOn, isOnSwitcher] = useState(false)
  const color = isOn? "red" : "yellow"
  function switchF(){
    isOnSwitcher(isOn => !isOn)
  }
  return <button onClick={switchF} style={{background:color}}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
