import Body from "./components/Body";
import { Provider }from 'react-redux'
import store from "./utils/redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
