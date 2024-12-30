const ContentText = () => {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[800px] pb-[160px]">
        <h1 className="font-bold text-[32px] leading-[48px]">
          Pengenalan UI UX
        </h1>
        <article id="Content-wrapper">
          <p>
            Dalam artikel ini, kita akan membahas tentang Laravel, mengapa
            framework ini dibuat, alasan mengapa belajar Laravel, keunggulan
            utama Laravel, persiapan yang diperlukan, langkah-langkah belajar
            Laravel, dan bagaimana menemukan mentor serta proyek sampingan untuk
            meningkatkan keterampilan Anda.
          </p>
          <h3>Dasar Design Principle</h3>
          <p>
            Laravel adalah framework open-source untuk PHP yang dibuat oleh
            Taylor Otwell. Framework ini dirancang untuk pengembang web yang
            ingin bekerja dengan cara yang elegan dan menyenangkan.
          </p>
          <pre className="wp-block-code">
            {"                            "}
            <code className="hljs language-php">
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              {"\n"}// DatabaseSeeder.php{"\n"}public function run(){"\n"}
              {"{"}
              {"\n"}
              {"    "}$this-&gt;call([{"\n"}
              {"        "}UsersTableSeeder::class,{"\n"}
              {"        "}AirlinesTableSeeder::class,{"\n"}
              {"        "}FlightsTableSeeder::class,{"\n"}
              {"    "}]);{"\n"}
              {"}"}
              {"\n"}Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque magnam dolore facilis deserunt dicta mollitia magni
              reprehenderit exercitationem dolorum repellat.{"\n"}
              {"                            "}
            </code>
            {"\n"}
            {"                        "}
          </pre>
          <ul>
            <li>
              <p>
                Autentikasi: Autentikasi pengguna adalah fitur penting dalam
                banyak aplikasi web. Laravel memiliki sistem autentikasi bawaan
                yang aman dan mudah digunakan.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                Caching: Untuk meningkatkan performa aplikasi, Laravel
                menyediakan fitur caching yang mudah dikonfigurasi dan
                digunakan.
              </p>
            </li>
          </ul>
          <figure>
            <img src="assets/images/thumbnails/th-5.png" alt="image" />
            <figcaption />
          </figure>
          <p>
            Mengamati ciri-ciri ini pada anak Anda dapat membantu Anda mengenali
            bakat mereka dalam coding dan memberikan dukungan yang tepat untuk
            mengembangkan kemampuan tersebut. Memberikan akses ke sumber daya
            belajar coding yang sesuai usia, seperti platform pembelajaran
            interaktif dan permainan edukatif, dapat membantu anak Anda
            mengeksplorasi dan mengembangkan minat mereka dalam bidang teknologi
            dan pemrograman.
          </p>
          <ul>
            <li>
              <p>
                Autentikasi: Autentikasi pengguna adalah fitur penting dalam
                banyak aplikasi web. Laravel memiliki sistem autentikasi bawaan
                yang aman dan mudah digunakan.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                Caching: Untuk meningkatkan performa aplikasi, Laravel
                menyediakan fitur caching yang mudah dikonfigurasi dan
                digunakan.
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-400px)] h-[151px] flex items-end justify-end pb-5 bg-[linear-gradient(0deg,#FFFFFF_49.67%,rgba(255,255,255,0)_84.11%)]">
        <button
          type="button"
          className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
        >
          Mark as Completed
        </button>
      </div>
    </>
  );
};

export default ContentText;
