import React from 'react';
import {Button} from "antd";

function Images() {
    return (
        <div className="cluster-manager">
            <a target="_blank" href="https://192.168.99.119/harbor/projects">
                <Button style={{position: "absolute", left: "50%", top: "50%", height: "3rem"}}>
                    Harbor - 企业级Registry服务器
                </Button>
            </a>
        </div>
    );
}

export default Images;
