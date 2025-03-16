import './App.css'
import Router from './components/Router'
import Context from './components/Context'

function App() {
  const userInfo = {
    name: "Tanya",
    email: "taanyasingh@gamil.com",
    loggedIn: true,
    cartItems: 4
  }//

  return (
    <>
      <Context.Provider value={userInfo}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
