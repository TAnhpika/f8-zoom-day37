import { useApi } from "@/hooks";

function PostList() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/posts",
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {data?.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
            <button onClick={refetch}>Refetch Data</button>
        </div>
    );
}

export default PostList;
