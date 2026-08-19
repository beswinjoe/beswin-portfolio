import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Beswin Joe — AI & Data Science'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F9F6F0',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1A1A1A',
          fontFamily: 'serif',
          border: '24px solid #E6DCC3',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '2px solid #E6DCC3',
            paddingBottom: '32px',
            marginBottom: '32px',
          }}
        >
          <h1
            style={{
              fontSize: 84,
              letterSpacing: '-2px',
              margin: 0,
              padding: 0,
            }}
          >
            BESWIN JOE
          </h1>
        </div>
        
        <p
          style={{
            fontSize: 24,
            letterSpacing: '8px',
            color: '#6C2424',
            margin: 0,
            padding: 0,
            fontFamily: 'sans-serif',
          }}
        >
          AI & DATA SCIENCE · PRODUCT BUILDER
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
