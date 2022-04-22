import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/root_reducer';
import rootSaga from '../sagas/root_saga';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;
