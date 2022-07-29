import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContainer } from "./components/Auth/AuthContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import {MainContainer} from "./components/Main/MainContainer";


function App() {
  return (
		<BrowserRouter>
			<Provider store={store}>
				<div className='app-wrapper'>
					{/*<switch>*/}
					<AuthContainer />
					{/*<MainContainer />*/}
						{/*<Route exact path='/' render={ () => <Redirect to={"/NoteListAside"} /> }/>*/}

						{/*<Route path='/' render={() => <NoteListAside />}/>*/}

					{/*</switch>*/}
				</div>
			</Provider>
    </BrowserRouter>
  );
}

export default App;
