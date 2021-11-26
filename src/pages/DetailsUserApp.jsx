import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router';

const DetailsUserApp = () => {
    const [repositories, setRepositories] = useState(false);
    const [organizations, setOrganizations] = useState(false);
    const location = useLocation();
    const user = location.state;
    console.log(user);
    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);

    async function getUser() {
        await axios
            .get(`https://api.github.com/users/${user?.login}`)
            .then((response) => {
                axios
                    .get(response.data.organizations_url)
                    .then((resOrganization) => setOrganizations(resOrganization.data));
                axios.get(response.data.repos_url).then((res) => {
                    setRepositories(res.data);
                });
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className="flex justify-center items-center flex-col container">
            <div className="details-container">
                <div className="details-item">
                    <img className="avatar-details" src={user?.avatar_url ? user?.avatar_url : "https://avatars.githubusercontent.com/u/583231?v=4"} alt="avatar" />
                    <div className="details-item-text">
                        <h2 className="text-5xl titulos">{user?.login}</h2>
                        <h2 className="text-2xl user-details">@{user?.login}</h2>
                        <h2 className="text-2xl">{user ? user?.bio : 'No descriptions'}</h2>
                    </div>
                </div>
                <div className="container-details">
                    <div className="organizaciones-container">
                        <h2 className="text-4xl mb-7 titulos">Organizations</h2>
                        {organizations.length > 0 ? (organizations.map((organization) => {
                            return (
                                <div className="organization-details">
                                    <div className="details-item-text">
                                        <h2 className="text-2xl">{organization?.login}</h2>
                                        <h2 className="text-2xl">{organization?.description ? organization?.description : 'Not found'}</h2>
                                    </div>
                                </div>
                            );
                        })) : (<p className="text-2xl">No organizations available!</p>)}
                    </div>
                    <div className="repositorios-container">
                        <div className="w-full">
                            <h2 className="text-4xl titulos mb-7">Repositories</h2>
                            {repositories.length > 0 ? (repositories.map((repositories) => {
                                return (
                                    <div className="repositorios">
                                        <div className="flex w-full justify-between">
                                            <div>
                                                <h2 className="text-xl">{repositories.name}</h2>
                                                <p className="text-xl">{repositories?.description ? repositories?.description : 'Not found'}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm">
                                                    {"" + moment(repositories?.updated_at).format('DD/MM/YYYY')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : (<p className="text-2xl">No repositories available!</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsUserApp;