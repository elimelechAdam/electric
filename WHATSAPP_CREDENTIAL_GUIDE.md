# WhatsApp Business API - Getting Correct Credentials

## 🚨 Issue Identified
Your Phone Number ID `725239544016638` is not accessible with your current token. This usually means:

1. **Wrong Phone Number ID** - The ID doesn't belong to your account
2. **Insufficient Permissions** - Your token doesn't have access to this phone number
3. **Account Mismatch** - The phone number belongs to a different Meta Business account

## 🔧 Step-by-Step Fix

### Step 1: Access Meta Business Manager
1. Go to [Meta Business Manager](https://business.facebook.com/)
2. Log in with your account that has the WhatsApp Business setup

### Step 2: Navigate to WhatsApp
1. In the left sidebar, click **"WhatsApp"**
2. If you don't see WhatsApp, you need to set up WhatsApp Business API first

### Step 3: Go to API Setup
1. Click on **"API Setup"** in the WhatsApp section
2. You should see a page with:
   - **Phone numbers** section
   - **Access tokens** section
   - **Webhooks** section

### Step 4: Get the Correct Phone Number ID
1. In the **"Phone numbers"** section, you'll see your verified phone numbers
2. Click on the phone number you want to use
3. Copy the **Phone number ID** (it's a long number, different from the phone number itself)

### Step 5: Generate a New Access Token
1. In the **"Access tokens"** section
2. Click **"Generate access token"**
3. Select the permissions you need:
   - ✅ `whatsapp_business_messaging`
   - ✅ `whatsapp_business_management`
4. Copy the new token immediately (it won't be shown again)

### Step 6: Verify Permissions
Make sure your app has these permissions:
- `whatsapp_business_messaging` - Required for sending messages
- `whatsapp_business_management` - Required for managing the account

## 🔍 Alternative: Find Your Credentials via Graph API

If you have access to Meta's App Dashboard:

### Get Your WhatsApp Business Account ID
```bash
curl -X GET "https://graph.facebook.com/v18.0/me/businesses" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Phone Numbers for Your Business
```bash
curl -X GET "https://graph.facebook.com/v18.0/YOUR_BUSINESS_ID/phone_numbers" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 📋 Quick Checklist

Before updating your environment variables, verify:

- [ ] You're logged into the correct Meta Business account
- [ ] Your WhatsApp Business account is verified and active  
- [ ] The phone number is added to your WhatsApp Business account
- [ ] Your access token has the right permissions
- [ ] You're copying the Phone Number ID (not the actual phone number)

## 🚀 Update Your Environment

Once you have the correct credentials:

```env
# Update these in your .env.local file
WHATSAPP_PHONE_NUMBER_ID=your_correct_phone_number_id
WHATSAPP_TOKEN=your_new_access_token
WHATSAPP_APP_SECRET=your_app_secret
WHATSAPP_VERIFY_TOKEN=mselectricalsolutionswhatsappmessages
```

## 🧪 Test Again

After updating:

1. Restart your dev server: `npm run dev`
2. Run diagnostics: `curl http://localhost:3000/api/whatsapp/diagnose`
3. If diagnostics pass, test messaging: `curl -X POST http://localhost:3000/api/whatsapp/test`

## 🆘 Still Having Issues?

If you continue having problems:

1. **Check your Meta Business account setup**
2. **Verify phone number verification status** 
3. **Ensure you have admin access to the WhatsApp Business account**
4. **Try creating a new access token with fresh permissions**

The most common issue is using a Phone Number ID from a different account or using an expired/wrong access token.
