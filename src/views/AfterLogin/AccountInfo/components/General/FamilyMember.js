import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { checkToken } from './../../../../../components/helper/LoginCheck';
import styles from './General.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';

export default function FamilyMember() {
    const [dependents, setDependents] = React.useState([]);
    useEffect(() => {
        const loginToken = checkToken();
        var myHeaders = new Headers();
        if (loginToken) {
            var bearerTokern = loginToken;
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${bearerTokern}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
            };
            fetch(
                `https://admindemo.onlineaarogya.com/api/patient/profile/dependents`,
                requestOptions,
            )
                .then(response => response.json())
                .then(response => setDependents(response.dependents))
                .catch(error => console.log('error', error));
        }
    }, [])
    return (
        <>
            <div className={styles.family_membeer}>
                {dependents.map((contain) => (
                    <div className={styles.family_member_list}>
                        <div className={styles.member_avatar}>
                            <img src={contain.avatar_url} alt="#" />
                        </div>
                        <div className={styles.member_details}>
                            <div className={styles.member_full_name}>
                                <p>{contain.title} {contain.first_name} {contain.last_name}</p>

                            </div>
                            <div className={styles.member_relations}>
                                <p>{contain.relation_ship.name} </p>
                            </div>
                            <div className={styles.member_age}>
                                <p>{contain.age} </p>
                            </div>
                        </div>
                        <div className={styles.view_data}>
                            <Button className={styles.button}>View Details&nbsp;<VisibilityIcon /></Button>
                            <Button className={styles.button}>View Medical History&nbsp;<AddIcon /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}