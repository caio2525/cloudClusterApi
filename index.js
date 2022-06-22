const express = require('express');
const app = express();

const tratores = [
                  {id: 1, frota: 77, status: 'Ativo', Posicao: [-22.190, -54.565], Saldo:64.8, fechamento:'21/jul'},
                  {id: 2, frota: 113, status: 'Finalizado', Posicao: [-22.190, -5.565], Saldo:12.5, fechamento:'29/jul'}
                 ]

app.get('/', (req,res) => {
  console.log(tratores)
  res.send("Hello");
});

app.get('/trator/:id', (req,res) => {
  var id = req.params.id
  console.log(id)
  return res.json(tratores[id-1]);
});

app.listen(process.env.port || 8080,'0.0.0.0',()=>{
      console.log('Web Server is listening at port '+ (process.env.port || 8080));
})

//app.listen(process.env.port || 3000);
//console.log('Web Server is listening at port '+ (process.env.port || 3000));
