import React, { useState } from 'react';
import { getGitHubProfile } from "../actions"
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import ProfileCard from './ProfileCard';


const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { usuarios } = useSelector(state => state.gitHub);
    const buscar = () => {
        if (search.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar un nombre de usuario',
            })
        } else {
            dispatch(getGitHubProfile(search));
        }
        setSearch("");
    }
    return (
        <>
            <div className="flex justify-between items-center container-searchbar active">
                <label className="flex-1" for="input">
                    <input type="search" name="user-input" id="inputSearch" className="inputSearch" placeholder="Search Github username.." onChange={(e) => setSearch(e.target.value)} value={search} />
                </label>
                <button className="btn-search" onClick={buscar}>Search</button>
            </div>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {usuarios.map((user) => (
                    <ProfileCard key={user?.id} user={user} />
                ))}
            </div>
        </>
    );
}

export default SearchBar;