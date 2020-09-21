import React from 'react'
import { Form } from 'react-bootstrap'

export default function AddModal() {
    return (
        <div>
            <Form>
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='name' />
                </Form.Group>

                <Form.Group controlId='lastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='name' />
                </Form.Group>

                <Form.Group controlId='role'>
                    <Form.Label>Role</Form.Label>
                    <Form.Control as='select'>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Graphic Designer</option>
                        <option>Marketing</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}
