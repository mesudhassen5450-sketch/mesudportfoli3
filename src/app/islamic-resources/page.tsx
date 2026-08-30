'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getMediaStats } from '@/data/mediaStore';
import { BookOpen, Headphones, Video, FileText } from 'lucide-react';

export default function IslamicResourcesPage() {
  const { language } = useLanguage();
  const stats = getMediaStats();

  const content = {
    en: {
      title: 'Islamic Educational Resources',
      subtitle: 'ስለ ቀልባችን @Sle_qelbachn1',
      audioTitle: 'Audio Lectures',
      audioDesc: 'Listen to Islamic lectures and teachings',
      videoTitle: 'Video Lectures',
      videoDesc: 'Watch educational videos and speeches',
      pdfTitle: 'Islamic Books (PDF)',
      pdfDesc: 'Read and download Islamic texts',
      allTitle: 'Browse All Resources',
      allDesc: 'Explore the complete media library',
    },
    ar: {
      title: 'الموارد التعليمية الإسلامية',
      subtitle: 'ስለ ቀልባችን @Sle_qelbachn1',
      audioTitle: 'المحاضرات الصوتية',
      audioDesc: 'استمع إلى المحاضرات والتعاليم الإسلامية',
      videoTitle: 'محاضرات الفيديو',
      videoDesc: 'شاهد مقاطع الفيديو التعليمية والخطب',
      pdfTitle: 'الكتب الإسلامية (PDF)',
      pdfDesc: 'اقرأ وحمل النصوص الإسلامية',
      allTitle: 'تصفح جميع الموارد',
      allDesc: 'استكشف مكتبة الوسائط الكاملة',
    },
    am: {
      title: 'የእስላማዊ ትምህርት ግብዓቶች',
      subtitle: 'ስለ ቀልባችን @Sle_qelbachn1',
      audioTitle: 'የድምፅ ንግግሮች',
      audioDesc: 'የእስላማዊ ንግግሮችን እና ትምህርቶችን ያዳምጡ',
      videoTitle: 'የቪዲዮ ንግግሮች',
      videoDesc: 'የትምህርት ቪዲዮዎችን እና ንግግሮችን ይመልከቱ',
      pdfTitle: 'የእስላማዊ መጽሐፍት (PDF)',
      pdfDesc: 'የእስላማዊ ጽሑፎችን ያንብቡ እና ያውርዱ',
      allTitle: 'ሁሉንም ግብዓቶች ያስሱ',
      allDesc: 'የአጠቃላይ ሚዲያ ቤተ መጻሕፍትን ያስሱ',
    },
  };

  const t = content[language];

  const resourceCards = [
    {
      icon: <Headphones className="w-12 h-12" />,
      title: t.audioTitle,
      description: t.audioDesc,
      count: stats.audio,
      link: '/audio-lectures',
      color: 'blue',
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: t.videoTitle,
      description: t.videoDesc,
      count: stats.video,
      link: '/videos',
      color: 'purple',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: t.pdfTitle,
      description: t.pdfDesc,
      count: stats.pdf,
      link: '/kitab',
      color: 'green',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: t.allTitle,
      description: t.allDesc,
      count: stats.total,
      link: '/all-resources',
      color: 'orange',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; hover: string }> = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      text: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400',
      hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      text: 'text-orange-600 dark:text-orange-400',
      hover: 'hover:bg-orange-100 dark:hover:bg-orange-900/30',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <LanguageSwitcher />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.subtitle}
          </p>
          
          {/* Stats Summary */}
          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">{stats.audio}</span>
              <p>{language === 'ar' ? 'صوت' : language === 'am' ? 'ድምፅ' : 'Audio'}</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">{stats.video}</span>
              <p>{language === 'ar' ? 'فيديو' : language === 'am' ? 'ቪዲዮ' : 'Video'}</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">{stats.pdf}</span>
              <p>{language === 'ar' ? 'كتب' : language === 'am' ? 'መጻሕፍት' : 'Books'}</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">{stats.total}</span>
              <p>{language === 'ar' ? 'المجموع' : language === 'am' ? 'ጠቅላላ' : 'Total'}</p>
            </div>
          </div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resourceCards.map((card, index) => {
            const colors = colorClasses[card.color];
            return (
              <Link key={index} href={card.link}>
                <div
                  className={`${colors.bg} ${colors.hover} rounded-xl p-8 transition-all duration-200 border-2 border-transparent hover:border-current ${colors.text} cursor-pointer h-full`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {card.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {card.count}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {language === 'ar' ? 'متاح' : language === 'am' ? 'ይገኛሉ' : 'available'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {language === 'ar' ? 'عن هذا الأرشيف' : language === 'am' ? 'ስለዚህ ማህደር' : 'About This Archive'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {language === 'ar' && 'هذه المنصة تحفظ وتقدم المحتوى التعليمي الإسلامي من قناة ስለ ቀልባችን @Sle_qelbachn1. يمكنك الاستماع إلى المحاضرات الصوتية، ومشاهدة مقاطع الفيديو، وقراءة الكتب الإسلامية بثلاث لغات.'}
            {language === 'am' && 'ይህ መድረክ ከስለ ቀልባችን @Sle_qelbachn1 ቻናል የተገኘውን የእስላማዊ ትምህርት ይዘት ያስቀምጣል እና ያቀርባል። የድምፅ ንግግሮችን ማዳመጥ፣ ቪዲዮዎችን መመልከት እና በሶስት ቋንቋዎች የእስላማዊ መጻሕፍትን ማንበብ ይችላሉ።'}
            {language === 'en' && 'This platform archives and serves Islamic educational content from ስለ ቀልባችን @Sle_qelbachn1 channel. You can listen to audio lectures, watch videos, and read Islamic books in three languages with a persistent global audio player.'}
          </p>
        </div>

        {/* Bottom Padding for Audio Player */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}
