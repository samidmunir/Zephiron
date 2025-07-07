import header from "../assets/header.png";

const Header = () => {
  return (
    <main className={`p-16 flex items-center justify-center`}>
      <section>
        <img
          src={header}
          alt="CareerNest Header"
          className="rounded-md shadow-2xl"
        />
      </section>
    </main>
  );
};

export default Header;
