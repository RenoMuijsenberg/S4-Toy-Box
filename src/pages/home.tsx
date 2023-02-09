import SearchBar from "../components/SearchBar";
import Navbar from "../components/navbar";
import ToyListView from "../components/ToyListView";

const Home = () => {
    return (
        <div>
            <SearchBar/>
            <ToyListView />
            <Navbar/>
        </div>
    );
};

export default Home;