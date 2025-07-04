import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import VideoUpload from '../components/VideoUpload';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <Head>
        <title>GoldTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center mb-4">
        <Link href="/">
          <a>
            <Image
              src="https://images.pexels.com/photos/1330645/pexels-photo-1330645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="A single purple doughnut with white stripes on a bright yellow backdrop, creating a striking color contrast."
              width={400}
              height={266}
              className="rounded-full"
            />
          </a>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/upload">
                <a>Upload</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to GoldTube</h1>
        <VideoUpload onUpload={(url) => setVideoUrl(url)} />
        {videoUrl && <VideoPlayer url={videoUrl} />}
      </main>
    </div>
  );
}