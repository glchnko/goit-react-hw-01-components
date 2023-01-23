import PropTypes from "prop-types";
import s from './profile.module.css';



const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={s.avatar}
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>
                </li>
                <li>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      })
}
