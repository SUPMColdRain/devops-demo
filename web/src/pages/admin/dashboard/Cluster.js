import React from 'react';

function Cluster() {
    return (
        <div className="cluster-manager">
            <iframe
                style={{width: '100%', border: '0px', height: "88vh"}}
                sandbox="allow-scripts allow-forms allow-same-origin"
                scrolling="auto"
                src={"http://192.168.99.118:9000/#!/1/docker/dashboard"}
            />
        </div>
    )
}

export default Cluster;
