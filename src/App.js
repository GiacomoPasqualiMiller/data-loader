import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import { ProductInfo } from "./ProductInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorage = async (key) => {
  return localStorage.getItem(key);
};

const Text = ({message})=> <h1>{message}</h1>

function App() {
  return (
    <>
      {/* <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="456">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="789">
        <UserInfo />
	</UserLoader> */}
      {/* <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
		</ResourceLoader>
		<ResourceLoader resourceUrl="/products/4567" resourceName="product">
        <ProductInfo />
	</ResourceLoader> */}
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
