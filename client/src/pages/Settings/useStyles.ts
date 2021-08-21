import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    width: '20vw',
    minWidth: '150px',
    height: '100%',
    borderRight: `1px solid ${theme.palette.divider}`,
    boxShadow: '3px 0 5px -2px #DDDDDD',
    paddingTop: 20,
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  },
  label: {
    fontSize: '14px',
    left: '20%',
  },
  profileWrapper: {
    [theme.breakpoints.down('sm')]: {
      width: '55vw',
    },
  },
  paymentDetails: {
    fontSize: '35px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '20px 0 30px 0',
    marginLeft: '58px',
  },
  tabPanel: {
    width: '80%',
  },
  indicator: {
    left: '10%',
    transform: 'rotate(90deg)',
  },
}));

export default useStyles;
