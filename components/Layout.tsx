import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      {/* <Header></Header> */}
      {props.children}
      {/* <Footer></Footer> */}
    </>
  );
}
