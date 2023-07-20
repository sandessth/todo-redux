function Card() {
  return (
    <div className="p-1">
      <a
        href="#"
        className="flex flex-col items-center bg-slate-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg pl-5"
          src="https://www.thespruce.com/thmb/eOuwYkllVBE97rMo1SB04bHDMbk=/4500x0/filters:no_upscale():max_bytes(150000):strip_icc()/organizing-a-to-do-list-2648011-hero-16c4949473354d57aab32e06a7cd619e.jpg"
          alt="to-do-list-gif"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thursday- July 20,2023
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            “One of the secrets of getting more done is to make a TO-DO List
            every day, keep it visible, and use it as a guide to action as you
            go through the day.” — Jean de La Fontaine
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card;
