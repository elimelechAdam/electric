import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  mobile: string
  company?: string
  message: string
}

export const ContactEmail = ({
  name,
  email,
  mobile,
  company,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from your website</Preview>
    <Body
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        direction: 'rtl',
      }}
    >
      <Container>
        <Heading style={{ color: '#2aba7f' }}>פנייה חדשה מהאתר</Heading>
        <Section
          style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px 0',
          }}
        >
          <Text>
            <strong>שם:</strong> {name}
          </Text>
          <Text>
            <strong>אימייל:</strong> {email}
          </Text>
          <Text>
            <strong>טלפון:</strong> {mobile}
          </Text>
          {company && (
            <Text>
              <strong>חברה:</strong> {company}
            </Text>
          )}
          <Text>
            <strong>הודעה:</strong>
          </Text>
          <Section
            style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '4px',
              marginTop: '10px',
            }}
          >
            <Text>{message}</Text>
          </Section>
        </Section>
        <Hr />
        <Text style={{ color: '#666', fontSize: '14px' }}>
          נשלח מ-{email}
        </Text>
      </Container>
    </Body>
  </Html>
)
