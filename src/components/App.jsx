import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(entry){
  return(
    <Entry
      id={entry.id}
      key={entry.id}
      name={entry.name} 
      emoji={entry.emoji} 
      meaning={entry.meaning}/>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">

        {emojipedia.map(createEntry)}
    
     </dl>
    </div>
  );
}

export default App;
