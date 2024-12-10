import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert('サインアップに失敗しました: ' + error.message);
    } else {
      alert('サインアップ成功! メールを確認してください');
    }
  };

  return (
    <div>
      <h1>サインアップ</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">サインアップ</button>
      </form>
    </div>
  );
};

export default Signup;
