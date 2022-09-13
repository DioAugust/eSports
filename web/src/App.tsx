import './styles/main.css'
import logo from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white  font-black mt-20">Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span>
        esta aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hiden">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className=" font-bold text-white block">Lolzinho</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hiden">
          <img src="/game2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className=" font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hiden">
          <img src="/game3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className=" font-bold text-white block">CS GO</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className=" font-bold text-white block">Apex legends</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hiden">
          <img src="/game5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className=" font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hiden">
          <img src="/game6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className=" font-bold text-white block">World of warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black">Nao escontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anuncio para encontrar novos players!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 ">
            <MagnifyingGlassPlus size="24" /> Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
