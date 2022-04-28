import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

const Home = ( ) => {
    return (
        <>
        <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
      <ItemCount />
        </>
    )
}

export default Home