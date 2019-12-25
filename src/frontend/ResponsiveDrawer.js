import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, 
    ListItemText, Toolbar, Typography, Collapse, ListSubheader, Button} from '@material-ui/core';
import {Menu, ExpandLess, ExpandMore, Home, Receipt, Group} from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BoxIcon from '../icons/box1.png';
import ReportIcon from '../icons/report.png';
import logo from '../logo1.png';
import Person from './Person';
import Login from './LoginPage';
import ManageUser from './Table';
import {Pane, Avatar} from 'evergreen-ui';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes1 = useStyles();
  const classes2 = useStyles();
  const classes3 = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [open1, setOpen1] = React.useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const drawer = (
    <div>
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <img src={logo} width="90%" alt=""></img>
        </ListSubheader>
      }  
    >
      <ListItem button>
        <ListItemIcon>
          <Home/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Group/>
        </ListItemIcon>
        <ListItemText primary="User Management" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Kelola User" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Aktivitas User" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <img src={BoxIcon} width="45%" alt=""></img>
        </ListItemIcon>
        <ListItemText primary="Items" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes1.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Kelola Barang" />
          </ListItem>

          <ListItem button className={classes1.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Kelola Kategori" />
          </ListItem>
        </List>

        <ListItem button className={classes1.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Tambah Barang" />
          </ListItem>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <Receipt/>
        </ListItemIcon>
        <ListItemText primary="Transaksi" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes2.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Transaksi Masuk" />
          </ListItem>

          <ListItem button className={classes2.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Transaksi Keluar" />
          </ListItem>
        </List>
      </Collapse>
     
      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <img src={ReportIcon} width="45%" alt=""></img>
        </ListItemIcon>
        <ListItemText primary="Laporan" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes3.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Laporan Transaksi" />
          </ListItem>

          <ListItem button className={classes3.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Stok On-Hand" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Manage User
          </Typography>

         <Pane display="inline-block" position="absolute" right="25px">
           <Button><Avatar name="Abdul Khobir" size={40} onClick={()=>{ alert('alert'); }}/></Button>
          
        </Pane>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ManageUser/>
        <Typography paragraph>
        </Typography>
        
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;