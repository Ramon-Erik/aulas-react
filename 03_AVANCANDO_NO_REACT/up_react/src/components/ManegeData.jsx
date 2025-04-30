import { useState } from "react";

const ManegeData = () => {
  let [num, setNum] = useState(1)
  return (
    <div>
      {/* <p>ManegeData.... vari: {vari}</p> */}
      <p>
        {/* <button onClick={() => {vari += vari; console.log(vari)}}>Clique</button> */}
      </p>
      <p>
        <span>ManegeData.... vari: {num} </span>
        <button onClick={() => {setNum(num+1); console.log(num)}}>Clique</button>
      </p>
    </div>
  )
}

export default ManegeData