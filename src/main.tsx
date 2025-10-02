import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'

function RootWrapper() {
  useEffect(() => {
    // Disable drag selection and image dragging globally
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
    }
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
    }

    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('selectstart', handleSelectStart)

    // Apply draggable=false to all images and links at startup
    const applyNoDrag = () => {
      document.querySelectorAll('img, a, video, svg, canvas').forEach((el) => {
        ;(el as HTMLElement).setAttribute('draggable', 'false')
      })
    }
    applyNoDrag()

    const observer = new MutationObserver(() => applyNoDrag())
    observer.observe(document.documentElement, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('selectstart', handleSelectStart)
      observer.disconnect()
    }
  }, [])

  return (
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  )
}

createRoot(document.getElementById('root')!).render(
  <RootWrapper />,
)
