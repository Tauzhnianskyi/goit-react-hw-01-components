import Profile from './profile/user';
import user from './profile/user.json';
import Statistics from './statistics/statistics';
import data from './statistics/data.json';
import FriendList from './friendsList/FriendList';
import friends from './friendsList/friends.json';
import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/transactions';
export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
