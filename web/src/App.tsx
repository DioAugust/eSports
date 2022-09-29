import './styles/main.css'
import logo from './assets/Logo.svg'
import GameBanner from './components/GameBanner'
import CreatedAdBanner from './components/CreatedAdBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'


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

          <Dialog.Content>
            <form>
              <div>
                <label htmlFor="game">Qual o game?</label>
                <input id="game" type="text" placeholder="Selecione o game que deseja jogar"></input>
              </div>
              <div>
                <label htmlFor="name">Seu nome ou nickname</label>
                <input id="name" placeholder="Como te chamam dentro do game?"></input>
              </div>
              <div>

                <div>
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"></input>
                </div>
                <div>
                  <label htmlFor="discord">Qual seu discord?</label>
                  <input id="discord" placeholder="Usuario#0000"></input>
                </div>
                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>

                  </div>
                  <div>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div>
                      <input type="times" id="hourStart" placeholder="De"></input>
                      <input type="times" id="hourEnd" placeholder="Ate"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                  <input type="checkbox"/>Costumo me conectar no chat de voz.
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

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  )
}

export default App
