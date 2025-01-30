import { Header } from "@organisms/Header";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {


  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}