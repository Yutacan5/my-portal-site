import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    const { data, error } = await supabase.from('users').insert([{ name, email }]);

    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).json({ data });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
