import BlogList from "./bloglist";
import Loading from "./loading";
import useFetch from "./usefetch";

const Home = () => {
    const {data,Pending,error}=useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {Pending && <Loading />}
            {data && <BlogList blogs={data} title={"my blog"} />}
        </div>
    );
}
 
export default Home;
