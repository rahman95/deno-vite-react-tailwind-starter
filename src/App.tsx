import denoLogo from './assets/deno.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import tailwindLogo from './assets/tailwind.svg'

import './App.css'

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="https://docs.deno.com" target="_blank">
          <img src={denoLogo} className="logo deno max-w-md" alt="Deno Logo" />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://vite.dev/guide/" target="_blank">
          <img src={viteLogo} className="logo small vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev/learn" target="_blank">
          <img src={reactLogo} className="logo small react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/docs" target="_blank">
          <img src={tailwindLogo} className="logo small tailwind" alt="Tailwind logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Deno + Vite + React + Tailwind Starter</h1>
      <a href="https://github.com/rahman95/deno-vite-react-tailwind-starter" className="flex items-center justify-center docs p-4 hover:underline hover:text-white" target="_blank">
        Github
      </a>
    </>
  )
}

export default App
