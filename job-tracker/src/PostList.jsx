import useFetch from "./hooks/useFetch"



function PostList() {

    const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;


    return (
        <div style={{ fontFamily: "Arial", margin: "20px" }}>
            <h2>Post List</h2>
            {posts.map((post) => (
                <div key={post.id} style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    marginBottom: "8px",
                    borderRadius: "6px"
                }}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList
