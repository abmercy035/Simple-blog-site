/** @format */
import useFetch from "../useFetch";
import BlogList from "./BlogList";

export const Home = ({searchFor}) => {
const { data : blogs, isFetching, error} = useFetch('http://localhost:8080/Blog')
  return (
    <div className="home">
     { error && <div> {error} </div> }
     {isFetching && <div> Loading... </div>}
{
 blogs && ( 
   !searchFor  ?  <BlogList blogs={blogs} title="All" /> : <BlogList blogs={blogs.filter(blog => blog.title.toLowerCase().includes(searchFor.toLowerCase()))} title={'Result of posts : '+ searchFor} />
)
}
    </div>
  );
};
