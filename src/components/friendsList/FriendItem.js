import {
  FriendItemStyle,
  FriendsOnline,
  FriendsOffline,
  Text,
} from './friendItem.styled';
import PropTypes from 'prop-types';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <FriendItemStyle>
      {isOnline ? (
        <FriendsOnline></FriendsOnline>
      ) : (
        <FriendsOffline></FriendsOffline>
      )}
      <img src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </FriendItemStyle>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
