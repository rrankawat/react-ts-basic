import { createRoot } from 'react-dom/client'
import EventComponent from './events/EventComponent'

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
