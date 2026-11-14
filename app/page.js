const nomes = ["Francisco", "Vancleide", "Pablo", "Camille", "Meg"];

export default function Page() {
  return (
    <ul>
      {nomes.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}
