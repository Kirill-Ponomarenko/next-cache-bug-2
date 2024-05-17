export default function Home() {
  console.log("Page render");
  return (
    <main>
      <img src="/next.svg" alt="Exists" width={180} height={37} />
      <img src="/vercel.svg" alt="Not exists" width={100} height={24} />
      <img
        src="/another.svg"
        alt="+1 rerender for each unique non-existing image source"
        width={1}
        height={1}
      />
    </main>
  );
}
