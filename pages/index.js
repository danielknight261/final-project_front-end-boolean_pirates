import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import Card from "../components/card.jsx";

const Home = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1 className="text-red-400">Next.js and Auth0 Example</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
      <Card
        imageURL="/img/card-top.jpg"
        title="Frozen Lake"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        hashtag1="cheese"
        hashtag2="bread"
        hashtag3="cake"
      />
    </Layout>
  );
};

export default Home;
