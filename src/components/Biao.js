import React from 'react'
import { Table } from 'antd';

 const Biao = ({data}) => {
    const columns = [
        {
            title: '名字',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            className: 'column-money',
            dataIndex: 'age',
            align: 'right',
        },
        {
            title: '学籍',
            dataIndex: 'box',
        },
    ];

    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                rowKey="key"
            />
        </>
    )

}
export default Biao
