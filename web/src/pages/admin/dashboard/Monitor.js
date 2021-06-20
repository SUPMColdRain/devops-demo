import React from 'react';

function Monitor() {
    return (
        <div>
            <div className="cluster-manager">
                <iframe
                    style={{width: '100%', border: '0px', height: "88vh"}}
                    sandbox="allow-scripts allow-forms allow-same-origin"
                    scrolling="auto"
                    src={"http://192.168.99.118:3030/dashboard/snapshot/JwnWS8fA4b19Zxg0aXlbByg5DmdS5HAm"}
                />
            </div>
        </div>
    );
}

export default Monitor;
