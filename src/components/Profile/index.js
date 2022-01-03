import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile_checkbox } from "../../store/profile/action";

export const Profile = () => {
    const name = useSelector(state => state.name);
    const checkboxValue = useSelector(state => state.checkbox);
    const dispatch = useDispatch();
    const setState = () => {
        dispatch(profile_checkbox);
    }
    return (
        <div>
            <input type="checkbox" checked={checkboxValue} onChange={setState} />
            <label>{name}</label>
        </div>
    );
}

export default Profile;