import React from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import './GameDetailsTableRow.scss'

type GameDetailsTableRowProps = {
  key: string;
  value: string;
  label: string;
}

export const GameDetailsTableRow = ({
  key,
  value,
  label,
}: GameDetailsTableRowProps) => (
  <TableRow key={key}>
    <TableCell component="th" scope="row" className="game-details-table-row__cell">
      <div className="game-details-table-row__title">
        {label}
        :
      </div>
    </TableCell>
    <TableCell component="th" scope="row" className="game-details-table-row__cell">
      <div className="game-details-table-row__value">{value}</div>
    </TableCell>
  </TableRow>
)
