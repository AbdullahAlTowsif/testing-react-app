import PrimaryButton from "./components/PrimaryButton"

function App() {

  return (
    <>
      <div>
        <h1 className='text-3xl text-red-700'>Hello World</h1>
        <PrimaryButton action="Update" />
        <PrimaryButton action="Delete" />
      </div>
    </>
  )
}

export default App;
