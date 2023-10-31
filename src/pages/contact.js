/** @jsx jsx */
import { jsx } from "theme-ui"
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Slider,
    Card,
    Button,
    Box
} from 'theme-ui'
import React, { useState } from 'react';
import { navigate } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, message)
        const formData = new FormData();
        formData.append('form-name', 'contact-me')
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)

        console.log(new URLSearchParams(formData).toString())
        console.log('Submitted')

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => navigate("/success/"))
            .catch((error) => alert(error));
    }
    return (
        <Layout>
            <Box sx={{
                alignItems: 'center',
                margin: 'auto',
                marginBottom: 2
            }}>
                <h1 sx={{
                }}>Contact me.</h1>
                <Card>
                    <form onSubmit={handleSubmit} name='contact-me' data-netlify="true">
                        <Input type="hidden" name="form-name" value="contact-me" />
                        <Label htmlFor="name">Name</Label>
                        <Input name="name" id="name" required mb={3} value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" required mb={3} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <Label htmlFor="message">Message</Label>
                        <Textarea name="message" id="message" required rows={6} mb={3} value={message} onChange={(e) => { setMessage(e.target.value) }} />
                        <Button type="submit" sx={{ cursor: 'pointer' }}>Submit</Button>
                    </form>
                </Card>
            </Box>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage