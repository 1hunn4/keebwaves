'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './faq.module.scss';
import Header from '@/components/modules/Header/Header';
import { questions } from '@/data';
import { AnswerType, iconMap } from '@/types';
import Image from 'next/image';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && questionRefs.current[openIndex]) {
      questionRefs.current[openIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [openIndex]);

  const renderAnswer = (answer: string, highlights?: string[], type?: AnswerType) => {
    let formattedAnswer = answer;

    if (highlights) {
      highlights.forEach(highlight => {
        formattedAnswer = formattedAnswer.replace(
          new RegExp(`(${highlight})`, 'gi'),
          '<span class="highlight">$1</span>'
        );
      });
    }
    const IconComponent = type ? iconMap[type] : null;

    return (
      <div className={`${styles.answerContent} ${type ? styles[`answer${type[0].toUpperCase() + type.slice(1)}`] : ''}`}>
        <div dangerouslySetInnerHTML={{ __html: formattedAnswer }} />
        {IconComponent && (
          <div className={styles.icon}>
            <Image
              src={IconComponent}
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
              className={styles.iconImage}
            />
          </div>
        )}
      </div>
    );
  };


  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.mainSection}>
          <div className={styles.header}>
            <h1 className={styles.title}>Ответы на частые вопросы</h1>
          </div>

          <div className={styles.content} role="list">
            {questions.map((item, index) => (
              <article
                key={item.question}
                className={`${styles.step} ${openIndex === index ? styles.stepOpen : ''}`}
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => e.key === 'Enter' && handleToggle(index)}
                tabIndex={0}
                aria-expanded={openIndex === index}
                ref={(el: HTMLDivElement | null) => {
                  questionRefs.current[index] = el;
                }}
              >
                <div className={styles.stepContent}>
                  <div className={styles.question}>
                    <strong>{item.question}</strong>
                    <span className={styles.arrow} aria-hidden="true" />
                  </div>
                  <div
                    className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}
                    role="region"
                    aria-hidden={openIndex !== index}
                  >
                    <div>
                      {renderAnswer(item.answer, item.highlights, item.type)}
                      <div className={styles.icon} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;