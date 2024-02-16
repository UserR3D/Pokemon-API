export const metadata = {
  title: "Pokedex - Api Train",
  description: "Poke Api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
