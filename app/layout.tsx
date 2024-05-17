export default function RootLayout({ children }) {
  console.log("Layout render");
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
