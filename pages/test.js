import { supabase } from '../lib/supabaseClient';

export default function TestPage() {
  const testConnection = async () => {
    // Supabaseからデータを取得
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      console.error('エラー:', error);
    } else {
      console.log('データ:', data);
    }
  };

  return (
    <div>
      <h1>Supabase接続テスト</h1>
      <button onClick={testConnection}>テスト実行</button>
    </div>
  );
}
