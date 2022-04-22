import { all } from 'redux-saga/effects';
import search from './search_saga';

export default function* rootSaga() {
	yield all([
		search()
	]);
}
