# WhatsApp Bot Setup Guide

## Environment Variables
Create a `.env.local` file with the following variables:

```env
WHATSAPP_PHONE_NUMBER_ID=1254188466396222
WHATSAPP_TOKEN=EAAR0rYIFXD4BPaWRerIOnV2CjkwSBwreNWmxzjZAzOpBPHHptZAuLGZAmzLLeL515mpliPTImaYjD9jKbz9Mxg8jNTLO7QYPFqAS7XZCR7pBkpmxPKtrL4KZCsxxKaxJ6ZBzC9SvV78m3f21kp2bddf2W1pVbnmJ7vQsYKXsUG1gOT5ZCwFvbSt8DCnd5muVPdO
WHATSAPP_APP_SECRET=61bc51dec2c40b333e9fe3a0508208c9
WHATSAPP_VERIFY_TOKEN=mselectricalsolutionswhatsappmessages
WHATSAPP_CALLBACK_URL=api/whatsapp/webhook
```

## Bot Flow

1. **Initial Message**: User sends any message to start the conversation
2. **Menu Display**: Bot responds with 3 interactive button options:
   - 🔧 Technical Support
   - 💰 Get Quote  
   - 📞 Contact Info
3. **Option Selection**: User selects by replying with `1`, `2`, or `3`
4. **Follow-up Prompt**: Bot asks for more details based on selection
5. **Final Response**: Bot provides relevant information and resets conversation

## API Endpoints

### Webhook: `/api/whatsapp/webhook`
- **GET**: Webhook verification for WhatsApp
- **POST**: Receives incoming messages from WhatsApp

### Test: `/api/whatsapp/test`
- **GET**: Check API status and configuration
- **POST**: Send test message to a phone number

### Diagnose: `/api/whatsapp/diagnose`
- **GET**: Run comprehensive diagnostics on your WhatsApp API setup

## Testing

### 1. Check API Status
```bash
curl http://localhost:3000/api/whatsapp/test
```

### 1a. Run Comprehensive Diagnostics
```bash
curl http://localhost:3000/api/whatsapp/diagnose
```
This will test your token, phone number ID, and permissions in detail.

### 2. Send Test Message

#### Using cURL:
```bash
curl -X POST http://localhost:3000/api/whatsapp/test \
  -H "Content-Type: application/json" \
  -d '{"phone": "+1234567890", "message": "Test message"}'
```

#### Using Postman:
1. **Method**: POST
2. **URL**: `http://localhost:3000/api/whatsapp/test`
3. **Headers**: 
   - `Content-Type: application/json`
4. **Body** (raw JSON):
```json
{
  "phone": "+1234567890",
  "message": "Hello, this is a test message!"
}
```

### 3. Webhook Verification
The webhook URL for WhatsApp configuration should be:
```
https://yourdomain.com/api/whatsapp/webhook
```

## Development

```bash
npm run dev
```

The bot will be available at `http://localhost:3000`

## Deployment

Deploy to Vercel or your preferred hosting platform. Make sure to:

1. Set all environment variables in your deployment platform
2. Configure the webhook URL in your WhatsApp Business API settings
3. Verify the webhook is working by sending a test message

## Troubleshooting

### Common Error: "Object with ID does not exist" (Error Code 100)

If you get this error when testing:
```
Unsupported post request. Object with ID '1254188466396222' does not exist, cannot be loaded due to missing permissions, or does not support this operation.
```

**Possible causes and solutions:**

1. **Expired Access Token**
   - WhatsApp access tokens expire every 24 hours (temporary) or 60 days (permanent)
   - Generate a new token from Meta Business > WhatsApp > API Setup

2. **Incorrect Phone Number ID**
   - Go to Meta Business > WhatsApp > API Setup
   - Copy the correct Phone Number ID (should be a long number)
   - Update your `.env.local` file

3. **Missing Permissions**
   - Ensure your Meta Business App has `whatsapp_business_messaging` permission
   - Check that the phone number is added to your WhatsApp Business Account

4. **Account Setup Issues**
   - Verify your WhatsApp Business Account is properly set up
   - Make sure the phone number is verified and connected

### Steps to Fix:

1. **Get Fresh Credentials**:
   - Go to [Meta Business](https://business.facebook.com/)
   - Navigate to your WhatsApp Business Account
   - Go to API Setup section
   - Copy the new Phone Number ID and Access Token

2. **Update Environment Variables**:
   ```env
   WHATSAPP_PHONE_NUMBER_ID=your_new_phone_number_id
   WHATSAPP_TOKEN=your_new_access_token
   ```

3. **Test Again**:
   ```bash
   curl -X POST http://localhost:3000/api/whatsapp/test \
     -H "Content-Type: application/json" \
     -d '{"phone": "+1234567890", "message": "Test message"}'
   ```

## Features

- ✅ Message webhook handling with signature verification
- ✅ Interactive button menus
- ✅ User state management with automatic cleanup
- ✅ Conversation flow with reset functionality
- ✅ Error handling and logging
- ✅ Test API endpoints
- ✅ TypeScript support
- ✅ Detailed error messages and troubleshooting
