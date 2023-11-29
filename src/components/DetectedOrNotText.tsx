import React from 'react'

interface DetectedOrNotTextProps {
  adsDetected: boolean
}

const DetectedOrNotText: React.FC<DetectedOrNotTextProps> = ({ adsDetected }) => {
  return (
    <>
      {adsDetected ? (
        <p style={{ color: 'red' }}>'Ad Blocker Detected'</p>
        ) : (
          <p style={{ color: 'green' }}>'No Ad Blocker Detected'</p>
        )
      }
    </>
  )
}

export default DetectedOrNotText
