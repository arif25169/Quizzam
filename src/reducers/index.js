import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { foldersReducer, foldersLoadingReducer, foldersFailReducer, selectedFolderReducer } from './foldersReducer';
import { getQuizReducer, quizLoadingReducer, quizFailReducer } from './quizReducer';
import { questionsReducer } from './questionsReducer';
import { userReducer, userFailReducer, userLoadingReducer } from './userReducer';

export default combineReducers({
  router: routerReducer,
  folders: foldersReducer,
  foldersLoading: foldersLoadingReducer,
  foldersFail: foldersFailReducer,
  selectedFolder: selectedFolderReducer,
  questions: questionsReducer,

  user: userReducer,
  userLoading: userLoadingReducer,
  userFail: userFailReducer,
  quiz: getQuizReducer,
  quizLoading: quizLoadingReducer,
  quizFail: quizFailReducer,
});
