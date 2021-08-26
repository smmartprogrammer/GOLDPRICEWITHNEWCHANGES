import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';
import goldlogo from '../Assets/goldlogo.png';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={goldlogo} width="100px" height="35px" />
          <Typography variant="h6" className={classes.title}>
            <p className="navItem">Jewellery</p>
            <p className="navItem">manual work</p>
            <p className="navItem">Fair and Sustainable</p>
            <p className="navItem">about us</p>
          </Typography>
          <Button color="inherit">
            <i class="fas fa-search"></i>&nbsp;&nbsp;&nbsp;
            <i class="far fa-user"></i>&nbsp;&nbsp;&nbsp;
            <i class="fas fa-shopping-bag"></i>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
