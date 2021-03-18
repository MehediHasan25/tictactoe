import '../styles/globals.css'
import { createStore, compose } from 'redux'
import allReducer from '../redux/reducers'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(allReducer, composeEnhancers());

  // const store = createStore(
  //   allReducer,
  //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
  // );


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
