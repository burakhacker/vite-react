import BookList from "./components/BookList";

import './App.css';
import Header from "./components/header";
import Layout from "./components/Layout";

function App() {


  return (
    <>
    <Layout>  
    <Header/>
    <h1>Boek Lijst</h1>
    <BookList />
    </Layout>
    </>
  );
}
  
export default App
