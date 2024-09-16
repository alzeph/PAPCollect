import React from 'react';
import { Flex, Layout } from 'antd';


export default function Base({ children }) {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout style={{ height: '100vh' }}>
            <Content style={{ backgroundColor: '#D1D1D1',marginBottom: '1em' }}>{children}</Content>
        </Layout>
    )
}