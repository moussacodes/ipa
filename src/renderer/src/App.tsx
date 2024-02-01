import Treeview from './components/Browser/Treeview'
import Widgets from './components/Browser/Widgets'
import Versions from './components/Versions'
import Playground from './components/View/Playground'
// import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div>
      <div className="flex w-screen h-screen text-gray-700">
        <Widgets />
        <Treeview />
        <Playground />
      </div>

      {/* <Versions></Versions> */}
    </div>
  )
}

export default App
