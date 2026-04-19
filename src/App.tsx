// import PrimaryButton from "./components/PrimaryButton"
// import FruitList from "./components/FruitList/FruitList";
// import UserForm from "./components/User/User";
import UserTable from "./components/UserTable/UserTable";
// eslint-disable-next-line react-refresh/only-export-components
export const fruitList = ["Apple", "Banana", "Pineaple", "Jackfruit"];

// eslint-disable-next-line react-refresh/only-export-components
export const users = [
  {id: 1, name: 'John', age: 32},
  {id: 2, name: 'Jane', age: 25},
  {id: 3, name: 'Bob', age: 43},
]

function App() {

  return (
    <>
      <div>
        <h1 className='text-3xl text-red-700'>Hello World</h1>
        {/* <PrimaryButton action="Update" />
        <PrimaryButton action="Delete" /> */}
        {/* <UserForm /> */}
        {/* <FruitList fruits={fruitList} /> */}
        <UserTable users={users} />
      </div>
    </>
  )
}

export default App;
