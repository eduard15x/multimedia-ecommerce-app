// Components

import Main from "./components/main.component";
import Footer from "./components/footer.component";
import Header from "./components/header.component";

function App() {
  return (
    <div className="App w-full bg-slate-500 xl:max-w-[1280px] 2xl:max-w-[1440px] 3xl:max-w-[1700px] h-screen mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
