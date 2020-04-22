import React from 'react'
import { FormattedMessage } from 'react-intl'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Game } from '../gamesTypes'

import { GameCard } from './GameCard'
import { GamesEmptyComponent } from './GamesEmptyComponent'

import './GamesComponent.scss'

type GamesComponentProps = {
  language: string;
  games: Game[];
  handleJoinGame: (gameId: string, companyName: string) => void;
}

type GridSizeType = 12 | 6 | 3

export const GamesComponent = ({
  language,
  games,
  handleJoinGame,
}: GamesComponentProps) => {
  let gridSize: GridSizeType = 12
  if (games.length > 4) gridSize = 3
  if (games.length > 1) gridSize = 6

  return (
    <Container component="main" maxWidth="lg" className="games-component">
      <Typography component="h1" variant="h3">
        <FormattedMessage
          id="games.title"
          defaultMessage="Games"
          description="Title displayed on the Games-page"
        />
      </Typography>
      {games.length > 0 && (
        <Grid container spacing={5} className="games-component__games-container">
          {games.map((game: Game) => (
            <Grid item xs={gridSize}>
              <GameCard
                language={language}
                game={game}
                handleJoinGame={(companyName: string) => handleJoinGame(game.gameId, companyName)}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {games.length === 0 && <GamesEmptyComponent />}
    </Container>
  )
}
