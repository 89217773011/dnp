import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import './tabs.css';
import Home from '../home/home'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    flexDirection: 'initial !important',
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function AboutUsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11,21V16.74C10.53,16.91 10.03,17 9.5,17C7,17 5,15 5,12.5C5,11.23 5.5,10.09 6.36,9.27C6.13,8.73 6,8.13 6,7.5C6,5 8,3 10.5,3C12.06,3 13.44,3.8 14.25,5C14.33,5 14.41,5 14.5,5A5.5,5.5 0 0,1 20,10.5A5.5,5.5 0 0,1 14.5,16C14,16 13.5,15.93 13,15.79V21H11Z" />
    </SvgIcon>
  );
}

function LoanIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4.94,6.35C4.55,5.96 4.55,5.32 4.94,4.93C5.33,4.54 5.96,4.54 6.35,4.93L13.07,10.31L13.42,10.59C14.2,11.37 14.2,12.64 13.42,13.42C12.64,14.2 11.37,14.2 10.59,13.42L10.31,13.07L4.94,6.35M12,20A8,8 0 0,0 20,12C20,9.79 19.1,7.79 17.66,6.34L19.07,4.93C20.88,6.74 22,9.24 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12H4A8,8 0 0,0 12,20M12,1A2,2 0 0,1 14,3A2,2 0 0,1 12,5A2,2 0 0,1 10,3A2,2 0 0,1 12,1Z" />
    </SvgIcon>
  );
}

function RubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
    </SvgIcon>
  );
}

function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root} >
      <AppBar position="static" color="default" className={'header'}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Главная" icon={<HomeIcon />} className={'tab'}/>
          <Tab label="О нас" icon={<AboutUsIcon />} />
          <Tab label="Рассрочка" icon={<LoanIcon />} />
          <Tab label="Оплата" icon={<RubIcon />} />
          <Tab label="Контакты" icon={<PhoneIcon />} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer className={'tab'}><Home className={'tab'}/></TabContainer>}
      {value === 1 && <TabContainer>О нас</TabContainer>}
      {value === 2 && <TabContainer>Рассрочка</TabContainer>}
      {value === 3 && <TabContainer>Оплата</TabContainer>}
      {value === 4 && <TabContainer>Контакты</TabContainer>}
    </div>
  );
}

export default ScrollableTabsButtonForce;
