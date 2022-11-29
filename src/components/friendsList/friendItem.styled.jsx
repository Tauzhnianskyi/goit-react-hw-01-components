import styled from '@emotion/styled';

export const FriendItemStyle = styled.li`
  width: 100%;
  heigh: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 5px;
  border: 1px solid lightgrey;
`;

export const FriendsOnline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-left: 10px;
`;

export const FriendsOffline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-left: 10px;
`;

export const Text = styled.p`
  font-weight: bold;
`;
