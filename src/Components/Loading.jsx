import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div style={styles.overlay}>
            <ClipLoader loading={true} size={80} color="#000" />
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
    }
};

export default Loading;
