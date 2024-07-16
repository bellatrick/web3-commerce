import Header from "../components/header";


export default function Layout({ children }) {
  return (
    <div className="bg-white/90">
      <Header />
      {children}
    </div>
  );
}
