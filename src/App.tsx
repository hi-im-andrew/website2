//import { useState } from 'react'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div class="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex flex-column">
        <div class="font-sans text-white self-center place-items-center mx-auto">
          <p class="text-5xl font-semibold">
            welcome to the club
          </p>
          <p class="text-sm font-light pt-3 mb-7">
            domain expansion coming Soon™
          </p>
          <div class="b mx-auto h-16 w-64 flex justify-center items-center">
            <div class="i h-16 w-64 bg-gradient-to-br from-blue-950 to-blue-800 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <a class="text-center text-white font-semibold z-10 pointer-events-none" href="https://bsky.bnuuy.club">
              button that's stil WIP
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
