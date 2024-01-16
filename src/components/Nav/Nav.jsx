
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Drawer,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { item: "Home", path: "/" },
  { item: "Employee List", path: "/employee-list" },
  { item: "Add Employee", path: "/add-employee" },
  { item: "Log out", path: "/" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={() => navigate("/")}
        variant='h6'
        sx={{ my: 2, cursor: "pointer" }}
      >
        Employee App
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem.item} disablePadding>
            <ListItemButton
              onClick={() => navigate(navItem.path)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={navItem.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" },
            }}
            onClick={() => navigate("/")}
          >
            Employee App
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((navItem) => (
              <Button
                onClick={() => navigate(navItem.path)}
                key={navItem.item}
                sx={{ color: "#fff" }}
              >
                {navItem.item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;