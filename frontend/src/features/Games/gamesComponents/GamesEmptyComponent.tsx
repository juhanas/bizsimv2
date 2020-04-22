import React from 'react'
import { FormattedMessage } from 'react-intl'

export const GamesEmptyComponent = () => (
  <div className="games-empty-component">
    <FormattedMessage
      id="gamesEmptyComponent.message"
      defaultMessage="No games found. Please check back later."
      description="Message displayed on the Games-page when there are no games to show"
    />
  </div>
)
