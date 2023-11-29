import './App.css'
import { useNetworkRequestCheck } from './hooks/useNetworkRequestCheck'
import DetectedOrNotText from './components/DetectedOrNotText'
import AdBlockDetectedWrapper from './components/AdBlockDetectedWrapper'

const App: React.FC = () => {
  const networkBlocked = useNetworkRequestCheck();

  return (
    <>
      <h1>Detect Ad Blockers</h1>
      <p className="docs">
        Try enabling your ad blocker and refreshing the page. You should see a message below. 
      </p>
      <div>
        <h2>Using a custom hook:</h2>
        <DetectedOrNotText adsDetected={networkBlocked} />
      </div>
      <div>
        <h2>Using a wrapper component:</h2>
        <AdBlockDetectedWrapper>
          <p>Naughty, naughty! Ad blocker detected!</p>
        </ AdBlockDetectedWrapper>
      </div>
    </>
  )
}

export default App
