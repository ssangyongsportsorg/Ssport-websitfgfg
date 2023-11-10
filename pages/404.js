import Link from 'next/link';
export default function Custom404() {
  return <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="underline mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
        404錯誤
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
        找不到此頁面
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        請在次檢查是否有輸入錯誤,如果還有問題聯繫：support@ssangyongsports.org
      </p>
      <Link
        href="/"
        className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
      >
        返回首頁
        
      </Link>
          
<img className="h-auto max-w-full" src="/404.png" alt="image description">

    </div>
  </div>
</section>
;
}
