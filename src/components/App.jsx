import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      <Entry name={emojipedia[0].name} emoji={emojipedia[0].emoji} meaning={emojipedia[0].meaning}/>
      <Entry name={emojipedia[1].name} emoji={emojipedia[1].emoji} meaning={emojipedia[1].meaning}/>
      <Entry name={emojipedia[2].name} emoji={emojipedia[2].emoji} meaning={emojipedia[2].meaning}/>
      
       
      </dl>
    </div>
  );
}

export default App;
