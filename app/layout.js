export const metadata = {
  title: "Portify",
  description: "Create your professional portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
