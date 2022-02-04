export default function Main(props: any) {
  const {
    name,
    description,
    subscribers_count,
    stargazers_count,
    forks_count,
  } = props.data || {
    name: "error",
    description: "error",
    subscribers_count: "error",
    stargazers_count: "error",
    forks_count: "error",
  };

  return (
    <section>
      <h2>{name}</h2>
      <p>{description}</p>
      <strong>👁 {subscribers_count}</strong>{" "}
      <strong>✨ {stargazers_count}</strong> <strong>🍴 {forks_count}</strong>
    </section>
  );
}
