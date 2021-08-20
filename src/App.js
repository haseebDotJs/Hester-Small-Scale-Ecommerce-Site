import './App.css';
import Routes from './routes/Routes'
import { GlobalProvider } from './context/GlobalState'
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header/Header'

function App() {
  const myTheme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(223,124,109)'
      },
      text: {
        secondary: 'rgb(255,255,255)',
      },
    },
    typography: {
      fontFamily: [
        'poppins',
        'sans-serif'
      ].join(','),
    }
  });

  console.log('app is rendering');
  return (
    <GlobalProvider>
      <ThemeProvider theme={myTheme}>
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
