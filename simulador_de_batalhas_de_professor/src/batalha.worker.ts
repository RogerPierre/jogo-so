self.onmessage = (event) => {
  const personagens = (event.data || []).filter(Boolean);

  if (personagens.length < 2) {
    self.postMessage({
      campeao: personagens[0]?.nome ?? "Nenhum",
      historico: [],
    });
    return;
  }

  const atacar = (atk: number, vel: number) =>
    Math.round(Math.random() * (atk * vel));

  const batalhar = (a: any, b: any) => {
    let vidaA = a.vida;
    let vidaB = b.vida;

    while (vidaA > 0 && vidaB > 0) {
      vidaB -= atacar(a.ataque, a.VelocidadeDeAtq);
      if (vidaB <= 0) break;
      vidaA -= atacar(b.ataque, b.VelocidadeDeAtq);
    }

    return vidaA > 0 ? a : b;
  };

  let rodada = [...personagens];
  const historico: string[] = [];

  while (rodada.length > 1) {
    const proximos: any[] = [];

    for (let i = 0; i < rodada.length; i += 2) {
      const a = rodada[i];
      const b = rodada[i + 1];

      // Se faltar par, avança automaticamente
      if (!b) {
        proximos.push(a);
        continue;
      }

      const vencedor = batalhar(a, b);
      historico.push(`${a.nome} vs ${b.nome} → ${vencedor.nome}`);
      proximos.push(vencedor);
    }

    rodada = proximos;
  }

  self.postMessage({
    campeao: rodada[0].nome,
    historico,
  });
};
