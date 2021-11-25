import React from 'react';



const ProfileCard = () => {
    return (
        <>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-header">
                        <img className="avatar" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="avatar-user" />
                        <div className="profile-info">
                            <div className="profile-name">
                                <h2 className="name">The Octocat</h2>
                                <p className="user">@octocat</p>
                                <p className="bio">Not descriptions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;