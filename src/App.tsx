import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BottomAppBar from "./components/BottomAppBar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      내용~^
      <BottomAppBar />
    </main>
  );
};

export default App;
