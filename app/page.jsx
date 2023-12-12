import Users from "../components/users.jsx";

export const metadata = {
  title: "Special Home Page",
};

export default function HomePage() {
  return (
    // server component
    <section>
      <h1>Home Page</h1>
      {/* client component */}
      <Users />
    </section>
  );
}