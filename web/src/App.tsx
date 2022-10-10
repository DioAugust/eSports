import './styles/main.css'
import logo from './assets/Logo.svg'
import GameBanner from './components/GameBanner'
import CreatedAdBanner from './components/CreatedAdBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'


function App() {
  interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
      ads: number
    }
  }

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(dados => {
        setGames(dados)
      })
  }, [])

  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">

    <img src={logo} alt="" />

    <h1 className="text-6xl text-white  font-black mt-20">
      Seu <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span> esta aqui
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">

      {games.map(game => {
        return (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads} />
        )
      })}
    </div>

    <Dialog.Root>
      <CreatedAdBanner />

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
          <Dialog.Title className="text-3xl font-black">Publique um anuncio</Dialog.Title>

          
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">Qual o game?</label>
                <Input 
                  id="game" 
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome ou nickname</label>
                <Input id="name" placeholder="Como te chamam dentro do game?"/>
              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"/>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input id="discord" placeholder="Usuario#0000" />
                </div>
                
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>

                    <div>
                      <button 
                        className="w-8 h-8" title="Domingo"></button>
                      <button 
                        className="w-8 h-8" title="Segunda"></button>
                      <button 
                        className="w-8 h-8" title="Terça"></button>
                      <button 
                        className="w-8 h-8" title="Quarta"></button>
                      <button 
                        className="w-8 h-8" title="Quinta"></button>
                      <button 
                        className="w-8 h-8" title="Sexta"></button>
                      <button 
                        className="w-8 h-8" title="Sábado"></button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="time" id="hourStart" placeholder="De"/>
                      <Input type="time" id="hourEnd" placeholder="Ate"/>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                  <Input type="checkbox"/>Costumo me conectar no chat de voz.
              </div>

                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController/>
                    Encontrar duo
                  
                  </button>
                </footer>

            </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  )
}

export default App
