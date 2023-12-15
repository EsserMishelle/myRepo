import Nav from "./Nav";
export default Header;

function Header() {
  return (
    <>
      <header>
        <h1 class="title">Sartre's List</h1>
        <h2 class="subtitle">Better-Dressed People</h2>
        <Nav />
      </header>
    </>
  );
}
