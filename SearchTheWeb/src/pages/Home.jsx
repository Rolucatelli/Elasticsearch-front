import Button from "../components/Button";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function Home() {
  let btnStyle = "r-2 p-4 text-blue-200";
  return (
    <>
      <Header>
        <Button className={btnStyle + " bg-green-500"}>Home</Button>
        <Button className={btnStyle}>Examples</Button>
        <Button className={btnStyle}>Dorks</Button>
      </Header>
      <SearchBar />
    </>
  );
}
