'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { BookOpen, Download, Play, Search } from 'lucide-react';

interface Book {
  id: string;
  title: {
    en: string;
    ar: string;
    am: string;
  };
  author: {
    en: string;
    ar: string;
    am: string;
  };
  description: {
    en: string;
    ar: string;
    am: string;
  };
  coverImage: string;
  audioFiles: number;
  category: string;
}

const books: Book[] = [
  {
    id: 'ad-dawa-ad-dawa',
    title: {
      en: "Ad-Da' wa Ad-Dawa'",
      ar: "الداء والدواء",
      am: "አዳእ ወደዋእ"
    },
    author: {
      en: "Ibn Qayyim al-Jawziyya",
      ar: "ابن قيم الجوزية",
      am: "ኢብኑ ቀይም አል-ጀውዚያ"
    },
    description: {
      en: "The Disease and the Cure - A comprehensive work on spiritual ailments and their remedies",
      ar: "الداء والدواء - عمل شامل عن الأمراض الروحية وعلاجها",
      am: "በሽታና መድሀኒት - ስለ መንፈሳዊ በሽታዎች እና መፍትሄዎቻቸው አጠቃላይ ሥራ"
    },
    coverImage: "/books/covers/dewa-and-shifa.jpg",
    audioFiles: 28,
    category: "Aqeedah"
  },
  {
    id: 'alkesidu-leyse-algerib',
    title: {
      en: "Alkesidu Leyse Algerib",
      ar: "القصيدة ليس الغريب",
      am: "አልቀሲዱ ለይሰ አልገሪብ"
    },
    author: {
      en: "Ibn Rajab al-Hanbali",
      ar: "ابن رجب الحنبلي",
      am: "ኢብን ረጀብ አል-ሐንበሊ"
    },
    description: {
      en: "The Stranger's Poem - A beautiful poem about the state of the believer in this world",
      ar: "قصيدة الغريب - قصيدة جميلة عن حال المؤمن في هذا العالم",
      am: "የማያውቀው ግጥም - ስለ አማኝ በዚህ ዓለም ሁኔታ ውብ ግጥም"
    },
    coverImage: "/books/covers/alkesid.jpg",
    audioFiles: 2,
    category: "Poetry"
  },
  {
    id: 'teshilu-alimu-sheria',
    title: {
      en: "Teshilu Alimu Sheria",
      ar: "تسهيل علم الشريعة",
      am: "ተሽሂሉ ዓሊሙ ሸሪዓ"
    },
    author: {
      en: "Sheikh Abdur-Rahman as-Sa'di",
      ar: "الشيخ عبد الرحمن السعدي",
      am: "ሸይኽ አብዱር-ረህማን አስ-ሰዕዲ"
    },
    description: {
      en: "Facilitation of Islamic Knowledge - Comprehensive guide to understanding Islamic jurisprudence",
      ar: "تسهيل المعرفة الإسلامية - دليل شامل لفهم الفقه الإسلامي",
      am: "የእስላማዊ እውቀት ቀላልነት - የእስላማዊ ሕግን ለመረዳት አጠቃላይ መመሪያ"
    },
    coverImage: "/books/covers/teshil.jpg",
    audioFiles: 11,
    category: "Fiqh"
  }
];

export default function KitabPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesSearch = 
      book.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-end mb-6">
            <LanguageSwitcher />
          </div>

          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              {language === 'en' && 'Islamic Books Library'}
              {language === 'ar' && 'مكتبة الكتب الإسلامية'}
              {language === 'am' && 'የእስላማዊ መጻሕፍት ቤተ መጻሕፍት'}
            </h1>
            
            {/* Hadith Quote Box */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <p className="text-xl sm:text-2xl text-white leading-relaxed italic mb-3">
                {language === 'en' && '"Seeking knowledge is an obligation upon every Muslim."'}
                {language === 'ar' && '"طلب العلم فريضة على كل مسلم."'}
                {language === 'am' && '"እውቀትን መፈለግ በእያንዳንዱ ሙስሊም ላይ ግዴታ ነው።"'}
              </p>
              <p className="text-sm text-white/80">
                {language === 'en' && '— Hadith from ስለ ቀልባችን @Sle_qelbachn1'}
                {language === 'ar' && '— حديث من ስለ ቀልባችን @Sle_qelbachn1'}
                {language === 'am' && '— ሀዲስ ከ ስለ ቀልባችን @Sle_qelbachn1'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={
                language === 'en' ? 'Search books by title, author, or description...' :
                language === 'ar' ? 'ابحث عن الكتب حسب العنوان أو المؤلف أو الوصف...' :
                'መጽሐፎችን በርዕስ፣ በደራሲ ወይም በመግለጫ ይፈልጉ...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-sm"
            />
          </div>
        </div>

        {/* Books Count */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === 'en' && `${filteredBooks.length} Books Available`}
            {language === 'ar' && `${filteredBooks.length} كتاب متاح`}
            {language === 'am' && `${filteredBooks.length} መጽሐፍት ይገኛሉ`}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {language === 'en' && 'From ስለ ቀልባችን @Sle_qelbachn1 Channel'}
            {language === 'ar' && 'من قناة ስለ ቀልባችን @Sle_qelbachn1'}
            {language === 'am' && 'ከ ስለ ቀልባችን @Sle_qelbachn1 ቻናል'}
          </p>
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-xl">
              {language === 'en' && 'No books found matching your search'}
              {language === 'ar' && 'لم يتم العثور على كتب مطابقة لبحثك'}
              {language === 'am' && 'ከፍለጋዎ ጋር የሚዛመዱ መጽሐፍት አልተገኙም'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
              >
                {/* Book Cover */}
                <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <Image
                    src={book.coverImage}
                    alt={book.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full">
                      {book.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {book.title[language]}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">
                      {language === 'en' && 'By'} {language === 'ar' && 'بواسطة'} {language === 'am' && 'በ'}
                    </span> {book.author[language]}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {book.description[language]}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
                      <Play className="w-5 h-5" />
                      <span>
                        {language === 'en' && 'Listen'}
                        {language === 'ar' && 'استمع'}
                        {language === 'am' && 'ያዳምጡ'}
                      </span>
                    </button>

                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Audio Files Count */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>
                        {book.audioFiles} {language === 'en' && 'audio files'} 
                        {language === 'ar' && 'ملفات صوتية'} 
                        {language === 'am' && 'የድምፅ ፋይሎች'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Padding for Audio Player */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}
