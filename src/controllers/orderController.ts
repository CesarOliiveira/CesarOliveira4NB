import { Request, Response } from 'express';
import pool from '../config/database';

export const getOrders = async (req: Request, res: Response) => {
    try {
      const { rows } = await pool.query('SELECT * FROM orders');
  
      if(rows[0] == null) return res.status(404).json("Nenhum Pedido encontrado.");
  
      res.status(200).json(rows);
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};