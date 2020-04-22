import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'

import { RootState } from '../../../store/rootReducer'
import { setLanguage } from '../../App/appSlice'

import './LanguageSelector.scss'

type LanguageSelectorProps = {
  showTitle: boolean | null;
}

const SlideTransition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) => <Slide direction="left" ref={ref} {...props} />,
)

export const LanguageSelector = ({ showTitle }: LanguageSelectorProps) => {
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = React.useState(null)
  const language = useSelector((state: RootState) => state.app.language)

  const handleClick = (event: any) => {
    setIsMenuOpen(event.currentTarget)
  }

  const handleClose = () => {
    setIsMenuOpen(null)
  }

  const handleSelectLanguage = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage))
    handleClose()
  }

  const languages = ['fi']
  if (!languages.includes(navigator.language)) {
    languages.push(navigator.language)
  }

  return (
    <div
      className={showTitle ? 'language-selector with-title' : 'language-selector'}
    >
      {showTitle && <div className="language-selector__title">Language:</div>}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {language}
      </Button>
      <Menu
        id="simple-menu"
        className="language-selector__menu-container"
        anchorEl={isMenuOpen}
        keepMounted
        TransitionComponent={SlideTransition}
        open={Boolean(isMenuOpen)}
        onClose={handleClose}
      >
        {languages.map((languageString: string) => (
          <MenuItem
            key={`language-${languageString}`}
            id={`language-${languageString}`}
            onClick={() => handleSelectLanguage(languageString)}
          >
            {languageString}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

LanguageSelector.defaultProps = {
  showTitle: false,
}
