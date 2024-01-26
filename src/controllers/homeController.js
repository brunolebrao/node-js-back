exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome do cliente: <input type="text" name="username" placeholder="username" />
      <button type="submit">Submit</button>`);
}

exports.respostaFormulario = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.username}`);
} 