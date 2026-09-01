import ProductList from "@/components/ProductList";
import UserProfile from "@/components/UserProfile";
import withLoading from "@/hoc/withLoading";
import { useState } from "react";

const UserProfileWithLoading = withLoading(UserProfile);
const ProductListWithLoading = withLoading(ProductList);

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    return (
        <div>
            <button onClick={() => setUserLoading(!userLoading)}>
                Toggle User Loading
            </button>
            <button onClick={() => setProductLoading(!productLoading)}>
                Toggle Product Loading
            </button>

            <h2>User Profile:</h2>
            <UserProfileWithLoading isLoading={userLoading} />

            <br />

            <h2>Product List:</h2>
            <ProductListWithLoading isLoading={productLoading} />
        </div>
    );
}

export default HOCDemo;
