import "./globals.css";

export const metadata = {
  title: "Clone TabNews IA",
  description: "Clone do TabNews construído com IA durante o curso.dev.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
