import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/users/usersActions';

function List() {
  const users = useSelector(state => state.users.items);
  const dispatch = useDispatch();
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <span>{user.name}</span>
          <button
            onClick={() => {
              dispatch(deleteUser(user.id));
            }}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
