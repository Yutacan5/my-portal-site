import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Supabaseへのデータ挿入
    const { data, error } = await supabase.from('users').insert([{ name, email }]);

    if (error) {
      // エラーの場合
      res.status(400).json({ error: error.message });
    } else {
      // 成功の場合
      res.status(200).json({ data });
    }
  } else {
    // 他のHTTPメソッドへの対応
    res.status(405).json({ message: 'Method not allowed' });
  }
}
