import './App.css';
import Navbar from "./component/Navbar"
import Leftbar from './component/Leftbar';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Grid from '@mui/material/Grid';
import  Add  from './component/Add';


// const useStyles = makeStyles((theme) => ({
//   button: {
//     ...theme.myButton
//   },

// })) 
function App() {

  // const classess = useStyles()

  return (
    <div className="App">
      <Navbar/>
      
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={3}>
          <Rightbar/>
        </Grid>
      </Grid>
      <Add/>
    </div>
  );
}

export default App;
