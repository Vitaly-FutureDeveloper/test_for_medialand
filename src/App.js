import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./redux/store";
import {Loading} from "./components/spinners/Loading";

const AuthContainer = React.lazy(() => import("./components/Auth/AuthContainer"));
const MainContainer = React.lazy(() => import("./components/Main/MainContainer"));


function App() {

  return (
		<BrowserRouter>
			<Provider store={store}>

				<div className='app-wrapper'>

					<React.Suspense fallback={<Loading />}>

						<Routes>
							<Route path='/*' element={ <MainContainer />} />
							<Route path='/auth' element={ <AuthContainer />} />
						</Routes>

					</React.Suspense>

				</div>

			</Provider>
    </BrowserRouter>
  );
}

export default App;
