import React, { useEffect, useState } from 'react';

import getEnvVariable from '../../services/getEnvVariable';

import './style.css';

const REFERRER_POLICY = 'no-referrer-when-downgrade';

export default function BackendCheck() {
    const [connectionConfigured, setConnectionConfigured] = useState(undefined);

    useEffect(() => {
        if (connectionConfigured === undefined) {
            fetch(getEnvVariable('REACT_APP_BACKEND_URL_BASE'), {
                referrerPolicy: REFERRER_POLICY
            })
            .then(response => setConnectionConfigured(response.ok))
            .catch(_ => setConnectionConfigured(false));
        }
    }, [connectionConfigured]);

    if (connectionConfigured === true) {
        return (
            <p>
                Connection with backend was configured!
            </p>
        )
    }
    else if (connectionConfigured === false) {
        return (<p>
            Error while configuring connection with backend
        </p>);
    }
    return (null);
}