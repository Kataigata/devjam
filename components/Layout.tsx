import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header></Header>
      <div id="contet-wrap">{props.children}</div>
      <Footer />
    </>
  );
}
