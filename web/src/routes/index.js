import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Cluster from "../pages/admin/dashboard/Cluster";
import List from "../pages/admin/userConfig/List";
import Edit from "../pages/admin/userConfig/Edit";
import {ClusterOutlined, InfoCircleOutlined, LineChartOutlined, UserOutlined} from "@ant-design/icons";
import Images from "../pages/admin/dashboard/Images";
import Monitor from "../pages/admin/dashboard/Monitor";

export const mainRoutes = [
    {
        path: '/login',
        component: Login
    }, {
        path: '/404',
        component: PageNotFound
    }
];

export const adminRoutes = [
    {
        path: '/admin/cluster',
        component: Cluster,
        isShow: true,
        title: "集群管理",
        icon: <ClusterOutlined/>
    }, {
        path: '/admin/images',
        component: Images,
        isShow: true,
        title: "镜像管理",
        icon: <InfoCircleOutlined/>
    }, {
        path: '/admin/monitor',
        component: Monitor,
        isShow: true,
        title: "监控面板",
        icon: <LineChartOutlined/>
    }, {
        path: '/admin/userConfig',
        component: List,
        isShow: true,
        exact: true,
        title: "用户配置",
        icon: <UserOutlined/>
    }, {
        path: '/admin/userConfig/edit/:s_username?',
        component: Edit,
        isShow: false
    }
];