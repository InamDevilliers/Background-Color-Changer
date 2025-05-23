import { useState } from "react"


function App() {
  const [color, setColor] = useState("green")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <h1 className={`font-bold flex justify-center text-2xl p-20 animate-pulse ${color == 'black' || color == 'red' || color == 'purple' || color == 'blue' || color == 'green' ? 'text-white' : 'text-black'}`}>Choose a color to change the background color</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border border-dashed">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "gray"}}
          >Gray</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>
          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
          style={{backgroundColor: "white"}}
          >White</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
          style={{backgroundColor: "black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
