import PostList from "@/components/PostList";
import ToggleContent from "@/components/ToggleContent";
import ToggleTheme from "@/components/ToggleTheme";
import UserList from "@/components/UserList";


function CustomHooksDemo() {
    return (
        <div>
            <h3>Post List: </h3>
            <ToggleContent title={"Post"} Component={PostList}/>

            <h3>User List: </h3>
            <ToggleContent title={"User"} Component={UserList}/>

            <ToggleTheme/>
        </div>
    );
}

export default CustomHooksDemo;
