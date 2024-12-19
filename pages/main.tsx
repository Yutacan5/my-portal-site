import { useRouter } from 'next/router';

const Main: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // サインアウト処理（必要に応じて追加）
    router.push('/login');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">社内ポータル</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* お知らせ */}
          <div className="p-4 bg-gray-50 rounded shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">お知らせ</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                <a
                  href="https://preview.studio.site/live/4BqNby7Vqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  当社のHPをリニューアルしました
                </a>
              </li>
              <li>
                <a
                  href="https://www.mhlw.go.jp/stf/newpage_32105.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  労働条件明示のルールが変更されました
                </a>
              </li>
              <li>新しい勤怠システムのお知らせ</li>
            </ul>
          </div>

          {/* 勤怠 */}
          <div
            className="p-4 bg-gray-50 rounded shadow-sm cursor-pointer hover:bg-gray-100 transition"
            onClick={() => router.push('https://atnd.ak4.jp/login')}
          >
            <h2 className="text-xl font-semibold text-gray-700">勤怠</h2>
            <p className="text-gray-600 mt-2">勤怠管理システムはこちらから</p>
          </div>

          {/* 業務マニュアル */}
          <div
            className="p-4 bg-gray-50 rounded shadow-sm cursor-pointer hover:bg-gray-100 transition"
            onClick={() => router.push('https://drive.google.com')}
          >
            <h2 className="text-xl font-semibold text-gray-700">業務マニュアル</h2>
            <p className="text-gray-600 mt-2">業務マニュアルはGoogle Driveに保存されています</p>
          </div>

          {/* 相談 */}
          <div
            className="p-4 bg-gray-50 rounded shadow-sm cursor-pointer hover:bg-gray-100 transition"
            onClick={() => router.push('https://gemini.google.com/app')}
          >
            <h2 className="text-xl font-semibold text-gray-700">相談</h2>
            <p className="text-gray-600 mt-2">チャットボットで相談する</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
