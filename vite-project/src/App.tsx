import './App.css'
import { Client, Functions, ExecutionMethod } from "appwrite";

function App() {

  async function triggerFunction(){
    try{
      const client = new Client()
        .setEndpoint('https://v16.appwrite.org/v1')
        .setProject("668840fe0017793b93a6")
      
      const functions = new Functions(client);
          
      const promise = functions.createExecution(
          '66912d430026c8ba69e4', // functionId
          '{email: "melusine@email", name: "melusine"}', // body (optional)
          false, // async (optional)
          '', // path (optional)
          ExecutionMethod.GET, // method (optional)
          {} // headers (optional)
      );

      promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
      
    }catch(err){
      console.error(err);
      throw new Error(`${err}`);
    }
  }

  return (
    <main>
      <h1>Test</h1>
      <form action="">
        <button onClick={(e)=>{
          e.preventDefault();
          triggerFunction()
          }}>Test</button>

      </form>
    </main>
  )
}

export default App