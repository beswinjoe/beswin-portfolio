import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#F9F6F0',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1A1A1A',
          fontFamily: 'serif',
          border: '1px solid #E6DCC3',
          letterSpacing: '-1px',
        }}
      >
        BJ
      </div>
    ),
    {
      ...size,
    }
  )
}
