import React from 'react'
import { useIntl } from 'react-intl'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

import { GameDetailsTableRow } from './GameDetailsTableRow'
import { Game } from '../gamesTypes'

type GameDetailsTableProps = {
  game: Game;
}

export const GameDetailsTable = ({ game }: GameDetailsTableProps) => {
  const intl = useIntl()
  return (
    <Table
      className="game-details-component__details-table"
      aria-label="game-details-table"
    >
      <TableBody>
        <GameDetailsTableRow
          key="1"
          value={game.capacity}
          label={intl.formatMessage({
            id: 'gameCard.capacity.title',
            defaultMessage: 'Capacity',
            description: 'Title displayed on game description for Capacity',
          })}
        />
        <GameDetailsTableRow
          key="2"
          value={game.demand}
          label={intl.formatMessage({
            id: 'gameCard.demand.title',
            defaultMessage: 'Demand',
            description: 'Title displayed on game description for Demand',
          })}
        />
        <GameDetailsTableRow
          key="3"
          value={game.length}
          label={intl.formatMessage({
            id: 'gameCard.gameLength.title',
            defaultMessage: 'Game length',
            description: 'Title displayed on game description for Game length',
          })}
        />
        <GameDetailsTableRow
          key="3"
          value={game.timePerDay}
          label={intl.formatMessage({
            id: 'gameCard.timePerDay.title',
            defaultMessage: 'Time per day',
            description: 'Title displayed on game description for Time per day',
          })}
        />
      </TableBody>
    </Table>
  )
}
