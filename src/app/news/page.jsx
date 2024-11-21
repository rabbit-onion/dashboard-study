'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // useEffect(() => { 실행될 코드 }, [deps])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://content.guardianapis.com/search?api-key=f7ea4f0e-1d5a-41ed-a509-b9770e3752ba&show-fields=thumbnail,headline,byline,bodyText');
        // const data = await res.json();

        // 전체 뉴스 데이터 배열
        const results = response.data.response.results;

        // response.data에 이미 파싱된 데이터가 있음
        console.log(results);
        setNews(results);

        // // fetch의 응답을 res로 받아 json으로 변환
        // .then((res) => {
        //   return res.json();
        // })
        // // 변환 완료된 data를 받아 resolve 실행
        // .then((data) => {
        //   console.log(data);
        //   setNews(data.response.results);
        // });

        //
        // 카테고리 추출
        const categorySet = [
          // new Set : 카테고리 중복 제거
          ...new Set(
            results.map((item) => {
              return item.sectionId;
            })
          ),
        ];

        setCategories(categorySet);
      } catch (error) {
        // error catch
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  // 카테고리 선택 시 뉴스 필터링
  const filteredNews =
    selectedCategory === ''
      ? news
      : news.filter((item) => {
          return item.sectionId === selectedCategory;
        });

  return (
    <div>
      <h2>뉴스</h2>
      {/* 뉴스 카테고리 */}
      <di className='flex gap-10 p-5'>
        <button
          onClick={() => {
            setSelectedCategory('');
          }}
        >
          전체
        </button>
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setSelectedCategory(item);
            }}
          >
            {item}
          </button>
        ))}
      </di>

      {/* 뉴스 리스트 */}
      <ul className='divide-y'>
        {filteredNews.map((item) => (
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
