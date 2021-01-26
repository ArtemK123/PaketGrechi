import React, { useEffect } from 'react';

import getEnvVariable from '../../services/getEnvVariable';

const REFERRER_POLICY = 'no-referrer-when-downgrade';
const SUCCESS_MESSAGE = 'Connection with backend was configured!';
const ERROR_MESSAGE = 'Error while configuring connection with backend.';

export default function BackendCheck() {
    useEffect(() => {
        const backendUrl = getEnvVariable('REACT_APP_BACKEND_URL_BASE');
        console.log(`Backend url is ${backendUrl}`);
        fetch(backendUrl, {
            referrerPolicy: REFERRER_POLICY
        })
        .then(response => {
            if (response.ok) {
                console.log(SUCCESS_MESSAGE);
            }
            else {
                console.log(`${ERROR_MESSAGE} Status code - ${response.status}`);
            }
        })
        .catch(error => console.log(`${ERROR_MESSAGE} ${error}`));
    }, []);
    return (null);
}