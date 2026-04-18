// import PrimaryButton from "./components/PrimaryButton"
import FruitList from "./components/FruitList/FruitList";
import UserForm from "./components/User/User";
// eslint-disable-next-line react-refresh/only-export-components
export const fruitList = ["Apple", "Banana", "Pineaple", "Jackfruit"];

function App() {

  return (
    <>
      <div>
        <h1 className='text-3xl text-red-700'>Hello World</h1>
        {/* <PrimaryButton action="Update" />
        <PrimaryButton action="Delete" /> */}
        <UserForm />
        <FruitList fruits={fruitList} />
      </div>
    </>
  )
}

export default App;
