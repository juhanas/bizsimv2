import React from 'react'

import { Game } from '../gamesTypes'

import { GameDetailsTable } from './GameDetailsTable'
import './GameDetailsComponent.scss'

type GameDetailsComponentProps = {
  language: string;
  game: Game;
}

export const GameDetailsComponent = ({
  language,
  game,
}: GameDetailsComponentProps) => (
  <div className="game-details-component">
    <div className="game-details-component__details">
      {game.details[language] || game.details.en}
    </div>
    <GameDetailsTable game={game} />
  </div>
)
