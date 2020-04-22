import React from 'react'
import { FormattedMessage } from 'react-intl'

import Avatar from '@material-ui/core/Avatar'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { JoinGameModal } from './JoinGameModal'
import { GameDetailsComponent } from './GameDetailsComponent'
import { Game } from '../gamesTypes'

import './GameCard.scss'

type GameCardProps = {
  language: string;
  game: Game;
  handleJoinGame: (companyName: string) => void;
}

export const GameCard = ({ language, game, handleJoinGame }: GameCardProps) => {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <div className="game-card">
      <Avatar className="game-card__avatar">
        <BusinessCenterIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {game.name}
      </Typography>
      <GameDetailsComponent language={language} game={game} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
      >
        <FormattedMessage
          id="gameCard.joinGame.submitButton.title"
          defaultMessage="Join game"
          description="Message displayed on button to join a game"
        />
      </Button>
      <JoinGameModal
        game={game}
        open={modalOpen}
        handleJoinGame={handleJoinGame}
        handleCloseModal={() => setModalOpen(false)}
      />
    </div>
  )
}
