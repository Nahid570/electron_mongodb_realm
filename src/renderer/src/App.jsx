import useOnlineStatus from "./hooks/useOnlineStatus";

const App = () => {
  const status =  useOnlineStatus()
  return (
    <div>
      <h1>Connection Status: {status ? 'Online' : 'Offline'} </h1>
    </div>
  )
}

export default App