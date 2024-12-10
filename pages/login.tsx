import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Supabase Authentication でログイン
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login Error:', error.message);
        throw new Error('ログインに失敗しました: ' + error.message);
      }

      alert('ログイン成功!');
      router.push('/main'); // メイン画面にリダイレクト
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/senior-background2.jpg')", // 背景画像を復旧
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          シニア新聞
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">メールアドレス</label>
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">パスワード</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ログイン
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          サインアップは{' '}
          <Link href="/signup" className="text-blue-600 hover:underline">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
