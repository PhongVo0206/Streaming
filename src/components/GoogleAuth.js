import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'293530943638-mr7bn7shuu2kegd88q1ni5q80psokr58.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth </div>
    };
};

export default GoogleAuth;