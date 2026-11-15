import Confetti from "./confetti";

async function getTotalConteudos() {
  try {
    const res = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      { next: { revalidate: 300 }, signal: AbortSignal.timeout(3000) },
    );
    return Number(res.headers.get("x-pagination-total-rows")) || null;
  } catch {
    return null;
  }
}

export default async function Page() {
  const total = await getTotalConteudos();

  return (
    <main>
      <Confetti />
      <h1>Em Construção</h1>
      <p>
        Estamos neste exato momento reconstruindo a TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto
      </p>
      {total && (
        <p>
          <strong>{total.toLocaleString("pt-BR")}</strong> conteúdos publicados
        </p>
      )}
      <a href="https://www.tabnews.com.br">Visite o site oficial</a>
    </main>
  );
}
