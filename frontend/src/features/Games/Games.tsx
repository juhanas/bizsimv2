import React, { Component } from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../store/rootReducer'
import { getGames, joinGame } from './gamesThunks'
import { Game } from './gamesTypes'
import { LoginDetails } from '../Auth/authTypes'

import { GamesComponent } from './gamesComponents/GamesComponent'

type GamesProps = {
  language: string;
  games: Game[];
  loginDetails: LoginDetails;
  getGames: (auth: LoginDetails) => void;
  joinGame: (gameId: string, companyName: string, auth: LoginDetails) => void;
}

class Games extends Component<GamesProps> {
  componentDidMount() {
    const { games, loginDetails, getGames } = this.props
    if (games.length === 0) {
      getGames(loginDetails)
    }
  }

  handleJoinGame = (gameId: string, companyName: string) => {
    const { joinGame, loginDetails } = this.props
    joinGame(gameId, companyName, loginDetails)
  }

  render = () => (
    <GamesComponent
      language={this.props.language}
      games={this.props.games}
      handleJoinGame={this.handleJoinGame}
    />
  )
}

const mapStateToProps = (state: RootState) => ({
  language: state.app.language,
  games: state.games.games,
  loginDetails: state.auth.loginDetails,
})

const mapDispatchToProps = {
  getGames,
  joinGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
