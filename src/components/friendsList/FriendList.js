import FriendItem from './FriendItem';
import { FriendListStyle } from './list.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
