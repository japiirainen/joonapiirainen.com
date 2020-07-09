import React from 'react'
import useDarkMode from 'use-dark-mode'
import SwitchToggle from '@mui-treasury/components/toggle/switch'
import { useCuteSwitchToggleStyles } from '@mui-treasury/styles/switchToggle/cute'
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

const DarkModeToggle = () => {
    const [toggled, setToggled] = React.useState(false)
    const darkMode = useDarkMode(false)
    const onToggle = () => {
        setToggled(!toggled)
        darkMode.toggle()
    }

    const gutterStyles = usePushingGutterStyles()
    return (
        <div className={gutterStyles.parent}>
            <SwitchToggle
                button
                toggled={toggled}
                useStyles={useCuteSwitchToggleStyles}
                onClick={onToggle}
                checked={darkMode.value}
                color={darkMode.value !== true ? '#3a3f85' : '#faf796'}
                onChange={darkMode.toggle}
            >
                {darkMode.value !== true ? <NightsStayIcon /> : <WbSunnyIcon />}
            </SwitchToggle>
        </div>
    )
}

export default DarkModeToggle
