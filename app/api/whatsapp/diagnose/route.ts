import { NextRequest, NextResponse } from 'next/server'

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID

export async function GET() {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    environment: {
      phoneNumberId: WHATSAPP_PHONE_NUMBER_ID ? 'configured' : 'missing',
      token: WHATSAPP_TOKEN ? 'configured' : 'missing',
      tokenLength: WHATSAPP_TOKEN?.length || 0,
      tokenPreview: WHATSAPP_TOKEN ? WHATSAPP_TOKEN.substring(0, 20) + '...' : 'not set'
    },
    tests: []
  }

  // Test 1: Check if we can reach Facebook Graph API
  try {
    const response = await fetch('https://graph.facebook.com/v18.0/me', {
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      diagnostics.tests.push({
        test: 'Token validation',
        status: 'pass',
        result: `Token is valid for app: ${data.name || data.id}`
      })
    } else {
      const error = await response.text()
      diagnostics.tests.push({
        test: 'Token validation',
        status: 'fail',
        result: error
      })
    }
  } catch (error) {
    diagnostics.tests.push({
      test: 'Token validation',
      status: 'error',
      result: `Network error: ${error}`
    })
  }

  // Test 2: Check Phone Number ID access
  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_NUMBER_ID}`, {
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      diagnostics.tests.push({
        test: 'Phone Number ID access',
        status: 'pass',
        result: `Phone number found: ${data.display_phone_number || data.id}`
      })
    } else {
      const error = await response.text()
      diagnostics.tests.push({
        test: 'Phone Number ID access',
        status: 'fail',
        result: error
      })
    }
  } catch (error) {
    diagnostics.tests.push({
      test: 'Phone Number ID access',
      status: 'error',
      result: `Network error: ${error}`
    })
  }

  // Test 3: Check WhatsApp Business Account
  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_NUMBER_ID}?fields=id,display_phone_number,verified_name,status`, {
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      diagnostics.tests.push({
        test: 'Phone Number Details',
        status: 'pass',
        result: data
      })
    } else {
      const error = await response.text()
      diagnostics.tests.push({
        test: 'Phone Number Details',
        status: 'fail',
        result: error
      })
    }
  } catch (error) {
    diagnostics.tests.push({
      test: 'Phone Number Details',
      status: 'error',
      result: `Network error: ${error}`
    })
  }

  // Generate recommendations
  const recommendations = []
  const failedTests = diagnostics.tests.filter(t => t.status === 'fail')
  
  if (!WHATSAPP_TOKEN) {
    recommendations.push('❌ WHATSAPP_TOKEN is not set in environment variables')
  }
  
  if (!WHATSAPP_PHONE_NUMBER_ID) {
    recommendations.push('❌ WHATSAPP_PHONE_NUMBER_ID is not set in environment variables')
  }

  if (failedTests.length > 0) {
    recommendations.push('❌ API tests failed - Phone Number ID or token issues detected')
    recommendations.push('📋 Follow the detailed guide: WHATSAPP_CREDENTIAL_GUIDE.md')
    recommendations.push('🔄 Generate a new access token from Meta Business Manager')
    recommendations.push('🆔 Verify you have the correct Phone Number ID (not the phone number)')
    recommendations.push('🏢 Ensure your WhatsApp Business Account is properly configured')
    recommendations.push('🔑 Check that your token has whatsapp_business_messaging permissions')
  }

  if (failedTests.length === 0 && WHATSAPP_TOKEN && WHATSAPP_PHONE_NUMBER_ID) {
    recommendations.push('✅ All tests passed! Your WhatsApp API should be working')
  }

  return NextResponse.json({
    ...diagnostics,
    recommendations
  }, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
