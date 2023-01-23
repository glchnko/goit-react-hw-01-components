import PropTypes from "prop-types";
import s from "./friendList.module.css"
import FriendItem from "./FriendItem";

const FriendList = ({friends}) => {
    return (
        <section>
            <ul className = {s.friendList}>
                {friends.map(friend => (
                    <li className= {s.item} key={friend.id}>
                        <FriendItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
        </section>
        
    )
}

export default FriendList;


FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

