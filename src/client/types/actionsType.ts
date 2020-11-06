// import * as modalActions from 'components/modalWindow/modalWindowActions';
import type * as modalActions from '../components/modalWindow/modalWindowActions';

type actinos = typeof modalActions
type actionType = ReturnType<actinos[keyof actinos]>

export default actionType;
