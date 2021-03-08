
//Import Components

import BlogList from './BlogList'

//import Hooks
import useFetch from './usefetch';

const Home = () => {

    //get data by Custom Hook : useFetch
    const {data : blogs , isLoading , error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            <h1> خانه  </h1>
            
            {error && <div> {error} </div>}

            {isLoading && <div className="loader-parent"><p>صفحه درحال بارگزاری است</p><div className="loader"></div></div>}

           { blogs && <BlogList blogs = {blogs}  /> }

        </div>

    );
}
 
export default Home;