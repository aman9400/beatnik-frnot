import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Portfolio from './Portfolio';
import AccountSettings from './AccountSettings';



const useStyles = makeStyles(theme => ({
    dashboard_parent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
    },

    dashboard_right_side: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '80%',
        margin: '1rem 0'
    }
}));
const NavigationSection = () => {
    const [activeSection, setActiveSection] = React.useState("portfolio");
    const classes = useStyles();
    const handleSection = (e, text) => {
        document.querySelectorAll(".dashboard_left_side_item").forEach(element => {
            element.classList.remove("dashboard_left_side_item_active")
        });
        setActiveSection(text)
        e.currentTarget.classList.add("dashboard_left_side_item_active")
    }

    return (
        <>
            <div className={classes.dashboard_parent}>

                <div
                    className="dashboard_left_side"
                >
                    <div
                        className="dashboard_left_side_item dashboard_left_side_item_active"
                        onClick={(e) => { handleSection(e, "portfolio") }}

                    >Portfolia</div>
                    <div
                        onClick={(e) => { handleSection(e, "accountsettings") }}
                        className="dashboard_left_side_item"
                    >Account Settings</div>
                </div>

                <div
                    className={classes.dashboard_right_side}
                >
                    {
                        activeSection === "portfolio" &&
                        <Portfolio />
                    }
                    {
                        activeSection === "accountsettings" &&
                        <AccountSettings />
                    }
                </div>

            </div>
        </>
    )
}

export default NavigationSection