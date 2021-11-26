import React from 'react';
import { useNavigate } from 'react-router';
const ProfileCard = ({ user }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="profile-container cursor-pointer" onClick={() =>
                navigate("/DetailsUserApp", {
                    state: user,
                })
            }
            >
                <div className="profile-content" style={{ "width": "100%" }} >
                    <div className="profile-header">
                        <img className="avatar" src={user?.avatar_url ? user?.avatar_url : "https://avatars.githubusercontent.com/u/583231?v=4"} alt="avatar-user" />
                        <div className="profile-info profile-name">
                            <h2 className="name text-ellipsis">{user?.name ? user?.name : user.login}</h2>
                            <p className="user text-ellipsis">@{user.login}</p>
                            <p className="bio text-ellipsis">{user?.bio ? user?.bio : 'Not descriptions'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;