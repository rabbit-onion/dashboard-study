'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  // useEffect(() => { 실행될 코드 }, [deps])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://content.guardianapis.com/search?api-key=f7ea4f0e-1d5a-41ed-a509-b9770e3752ba&show-fields=thumbnail,headline,byline,bodyText');
        // const data = await res.json();

        // response.data에 이미 파싱된 데이터가 있음
        console.log(response.data);
        setNews(response.data.response.results);

        // // fetch의 응답을 res로 받아 json으로 변환
        // .then((res) => {
        //   return res.json();
        // })
        // // 변환 완료된 data를 받아 resolve 실행
        // .then((data) => {
        //   console.log(data);
        //   setNews(data.response.results);
        // });
      } catch (error) {
        // error catch
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>뉴스</h2>
      <ul className='divide-y'>
        {news.map((item) => (
          <li key={item.id}>
            <Link href={item.webUrl} className='p-5 flex gap-4'>
              <Image src={item.fields.thumbnail} alt={item.webTitle} width={100} height={80} className='object-cover w-1/3' />
              <div className='flex flex-col flex-1 justify-between'>
                <strong className='mt-3'>{item.webTitle}</strong>
                <p className='text-gray-500 text-sm mt-1'>{item.webPublicationDate}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
