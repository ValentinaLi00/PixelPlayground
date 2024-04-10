import { Product } from "./components/product/Product";
import { UserPage } from "./components/userPage/UserPage";
import { UploadAvatar } from "./components/UploadAvatar/UploadAvatar";
import { Footer } from "./components/footer/Footer";

export function App() {
  return (
    <div>
      {/* <Product /> */}
      <UserPage />
      <Footer />
      {/* <UploadAvatar /> */}
    </div>
  );
}

export default App;
