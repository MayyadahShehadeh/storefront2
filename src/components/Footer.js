import * as React from 'react';
import { Toolbar, Box, AppBar} from '@mui/material';
import '../css/footer.css';

export default function Footer() {
  return (
    <div id='footer'>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        &copy; Mayadah
         
        </Toolbar>
      </AppBar>
    </Box>
        </div>
  );
}