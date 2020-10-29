import React, { useState } from 'react'
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
const Tian = ({onAdd}) => {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [box, setbox] = useState("")
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const onClose1 = () => {
        setVisible(false);
        setname("")
        setage("")
        setbox("")
        onAdd({
            name,
            age,
            box
        })
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                添加
            </Button>
            <Drawer
                title="添加学生"
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            取消
              </Button>
                        <Button onClick={onClose1} type="primary">
                            提交
              </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="名字"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input value={name} onChange={e => setname(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="age"
                                label="年龄"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input value={age} onChange={e => setage(e.target.value)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="box"
                                label="学籍"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input value={box} onChange={e => setbox(e.target.value)} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>

        </>
    )
}

export default Tian