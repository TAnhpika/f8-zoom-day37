import PostList from "@/components/PostList";
import UserList from "@/components/UserList";

function CustomHooksDemo() {
    return (
        <div>
            <h3>Post List: </h3>
            <PostList />

            <h3>User List: </h3>
            <UserList />
        </div>
    );
}

export default CustomHooksDemo;
