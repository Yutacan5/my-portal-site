import { useRouter } from 'next/router';

const Main: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // サインアウト処理（必要に応じて追加）
    router.push('/login');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/senior-background2.jpg')",
      }}
    >
      <div className="w-full max-w-2xl bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">メインページ</h1>
        <p className="text-lg text-gray-600 mb-8">
          ここはログイン後のメインページです。必要に応じてコンテンツを追加してください。
        </p>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default Main;
