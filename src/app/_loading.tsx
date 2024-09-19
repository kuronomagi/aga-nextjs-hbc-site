const Loading = () => (
  <div style={{ marginTop: 10 }}>
    {Array.from({ length: 20 }, (_, i) => (
      <div key={`sign-up-loader-${i}`} style={{ height: 42, marginBottom: 15 }}></div>
    ))}
  </div>
);

export default Loading;
