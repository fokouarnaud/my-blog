import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <div>
      <div className=" flex justify-between mx-auto max-w-7xl bg-yellow-300">
        <div className="border-r border-gray-400 w-32 min-h-screen">
          <nav className="h-full">
            <div className="h-screen flex flex-col items-center justify-between sticky top-4">
              <div className="h-16 w-16 py-16 px-0"> <img className="object-cover object-center" src="/images/logo.png" alt="logo" /></div>
              <div className="space-y-5">
                <div className="font-extrabold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <hr className="border border-gray-400" />
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <div><span></span></div>
            </div>

          </nav>

        </div>
        <main>content</main>
        <div className="w-96 min-h-screen border-l border-gray-600 py-0 px-12">
          <div className="relative h-full w-full">
            <div className="sticky top-0 mt-0">
              <div className="min-h-screen flex flex-col">
                <div className="grow shrink-0 basis-auto " >
                  <div>
                    <div className="pt-16 flex flex-row items-center">

                      <div className="grow shrink-0 basis-auto">
                        <span><p className="m-0 p-0">
                          <button className=" w-full normal-case border-solid border border-black bg-black pt-2 px-5 pb-3 text-white rounded-full">
                            Get started
                          </button>
                        </p></span>
                      </div>
                      <div className=" font-normal text-blue-600 ml-10">
                        <span><a href="#" className="m-0 p-0">Sign In</a></span>
                      </div>
                    </div>

                  </div>
                  <div className="py-16 px-0">
                    <div className=" flex flex-row border rounded-3xl border-gray-500">
                      <div className="" aria-describedby="searchResults" aria-labelledby="searchResults">
                      </div>
                      <span className=" pt-3 pr-3 pb-2 pl-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                      <input className="bg-transparent border-none outline-0 outline-none outline-current  pt-2 px-0 pb-3 mr-8 text-black text-base font-sans" role="combobox" aria-controls="searchResults" aria-expanded="false" aria-label="search"  placeholder="Search"  />
                    </div>
                  </div>

                  <div className="mt-16"></div>
                  <a href="#" className="m-0 p-0">
                    <div className="relative">
                      <img src="/images/profil.png" className="w-32 h-32 rounded-full"/>
                    </div>
                  </a>
                  <div className="mt-6"></div>
                  <a className="m-0 p-0"  href="#"><h2 className=" text-gray-900 text-2xl tracking-normal font-medium">Fokou Arnaud</h2></a>
                  <div className="mt-2"></div>
                  <p className="text-gray-600"><span className="text-gray-500 text-2xl font-normal"><button className="p-0 m-0">8.2K Followers</button></span></p>
                  <div className="mt-4"></div>
                  <p className="text-gray-600 text-base">Product Manager for Flutter (a framework for building mobile apps) and Dart (a modern, client-optimized programming language) at Google.</p>
                </div>
                <div className="py-10 px-0 flex flex-row flex-wrap ">
                  <div className="mr-3"> <a href="#" className="p-0 m-0"><p className="text-base text-gray-700" >Help</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Status</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700" >Blog</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Careers</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Privacy</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Terms</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">About</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Knowable</p></a></div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
