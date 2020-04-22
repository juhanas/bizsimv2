import React from 'react'
import { FormattedMessage, useIntl, IntlShape } from 'react-intl'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Game } from '../gamesTypes'

import './JoinGameModal.scss'

type JoinGameModalProps = {
  game: Game;
  open: boolean;
  handleJoinGame: (companyName: string) => void;
  handleCloseModal: () => void;
}

const getErrorText = (showError: boolean, intl: IntlShape): string => (showError
  ? intl.formatMessage({
    id: 'joinGameModal.companyNameField.errorMessage',
    defaultMessage: 'Company name must be at least 5 characters long',
    description: 'Join game modal company name error text',
  })
  : '')

export const JoinGameModal = ({
  game,
  open,
  handleJoinGame,
  handleCloseModal,
}: JoinGameModalProps) => {
  const intl = useIntl()
  const [companyName, setCompanyName] = React.useState('')
  const companyNameError = companyName.length < 5

  const handleUsernameChange = (event: any) => {
    setCompanyName(event.target.value)
  }

  return (
    <div className="join-game-modal">
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="simple-dialog-title"
        open={open}
        classes={{
          container: 'join-game-modal__modal',
          paper: 'join-game-modal__paper',
        }}
      >
        <DialogTitle className="join-game-modal__title">
          <FormattedMessage
            id="joinGameModal.title"
            defaultMessage="Join game"
            description="title displayed on the modal for joining a game"
          />
          <span className="join-game-modal__container__game-name">{game.name}</span>
        </DialogTitle>
        <div className="join-game-modal__container">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="companyName"
            label={intl.formatMessage({
              id: 'joinGameModal.companyNameField.title',
              defaultMessage: 'Company name',
              description:
                'Title for textfield for choosing a company in Join game modal',
            })}
            name="companyName"
            autoComplete="companyName"
            autoFocus
            value={companyName}
            error={companyNameError}
            helperText={getErrorText(companyNameError, intl)}
            onChange={handleUsernameChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={companyNameError}
            className="join-game-modal__container__submit-button"
            onClick={() => handleJoinGame(companyName)}
          >
            <FormattedMessage
              id="joinGameModal.submitButton.title"
              defaultMessage="Join game"
              description="Message displayed on button to join a game"
            />
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleCloseModal}
          >
            <FormattedMessage
              id="joinGameModal.cancelButton.title"
              defaultMessage="Cancel"
              description="Message displayed on button to cancel joining a game in joinGameModal"
            />
          </Button>
        </div>
      </Dialog>
    </div>
  )
}
