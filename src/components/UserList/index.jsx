import { useApi } from "@/hooks";

function UserList() {
    const { data, loading, error, refetch } = useApi(
        `https://jsonplaceholder.typicode.com/users`,
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {data?.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={refetch}>Refetch Data</button>
        </div>
    );
}

export default UserList;
