import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';
import NoteList from './NoteList';
import NoteShow from './NoteShow';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default {
  list: NoteList,
  show: NoteShow,
  create: NoteCreate,
  edit: NoteEdit,
  icon: AccountBalanceIcon,
  options: {
    label: 'Notes YesWiki'
  }
};
