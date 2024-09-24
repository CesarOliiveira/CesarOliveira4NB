import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

// Utilizando as rotas de usuários
app.use(userRoutes);
// Utilizando as rotas de Pedidos
app.use(orderRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});