import Profile  from "./Profile/Profile";
import user from "../data/user.json"
import Statistics from "./Statistics/Statistics";
import data from "../data/data.json";
import FriendList from "./FriendsList/FriendList";

import friends from "../data/friends.json";


import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json";
import FriendItem from "./FriendsList/FriendItem";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101' 
      }}
    >
      
       {/* My first React homework */}
       <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />
      
    </div>
  
  );
};
