import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center pt-8 select-none">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
