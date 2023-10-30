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

import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {

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
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        action="/success/"
                    >
                        <Label htmlFor="name">Name</Label>
                        <Input name="name" id="name" required mb={3} />
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" required mb={3} />
                        <Label htmlFor="message">Message</Label>
                        <Textarea name="message" id="message" required rows={6} mb={3} />
                        <Button sx={{cursor: 'pointer'}}>Submit</Button>

                    </form>
                </Card>
            </Box>



        </Layout>
    )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage