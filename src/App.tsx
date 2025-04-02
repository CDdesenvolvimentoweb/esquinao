import DigitalCard from './components/DigitalCard'
import { useEffect, useState } from 'react'

function App() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIwLjUiLz48L2c+PC9zdmc+')]" />
      
      {/* Animated gradient background */}
      <div 
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 50%), radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(29, 78, 216, 0.03) 0%, transparent 25%)'
        }}
      />
      
      {/* Card Container with responsive padding */}
      <div className="w-full max-w-md mx-auto py-8 sm:py-12 px-4 relative z-10">
        <DigitalCard />
      </div>
    </div>
  )
}

export default App
