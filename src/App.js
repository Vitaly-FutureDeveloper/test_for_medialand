import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthContainer } from "./components/Auth/AuthContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import MainContainer from "./components/Main/MainContainer";


function App() {


  return (
		<BrowserRouter>
			<Provider store={store}>
				<div className='app-wrapper'>

					<Routes>
						<Route path='/*' element={<MainContainer />} />
						<Route path='/auth' element={<AuthContainer />} />
					</Routes>

				</div>
			</Provider>
    </BrowserRouter>
  );
}

export default App;
