import Body from "./components/Body";
import { Provider }from 'react-redux'
import store from "./utils/redux/store";
import Fetching from "./Fetching";
import Header from "./components/Header";
import GPTSearchBar from "./components/GPTSearchBar";
import GPTSearch from "./components/GPTSearch";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Body/>
      </Provider>
 
      
       {/* <Fetching/> */}
       
    </div>
  );
}

export default App;
